const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const con = require("./db/connection");
const argon2 = require("argon2");
const crypto = require('crypto');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend URL
  }));
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Update with your email service provider
  auth: {
    user: 'usersampleclient@gmail.com', // Update with system email address
    pass: 'nude kthi puug qhxh' // Update with system email app password
  }
});

//CONTACT FORM
app.post('/api/send-email', async (req, res) => {
  try {

    // Compose email options
    const mailOptions = {
      from: 'usersampleclient@gmail.com', // Update with system email address
      to: '3mvconstructionad@gmail.com', // Update with admin's email address
      subject: `New Inquiry from ${req.body.name}`,
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Message: ${req.body.message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

//SIGNUP
app.post('/api/signup', async (req, res) => {
  try {
    const { fname, lname, email, password, cpassword } = req.body;

    if (password !== cpassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const hashpass = await argon2.hash(password);
    const checkEmailQuery = "SELECT email FROM users WHERE email = ?";

    con.query(checkEmailQuery, [email], (err, result) => {
      if (err) {
        console.error('Error checking user email:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (result.length > 0) {
        return res.status(409).json({ error: 'Email already in use' });
      } else {
        const insertUserQuery = "INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)";
        con.query(insertUserQuery, [fname, lname, email, hashpass], (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: 'Internal server error' });
          }
          res.status(201).json({ message: 'User registered successfully' });
        });
      }
    });

  } catch (error) {
    console.error('Error in sign-up process:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//SIGN IN
app.post('/api/signin', async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let sql = "SELECT * FROM users WHERE email = ?";

    con.query(sql, [email], async (err, result) => {
      if(err){
        console.log(err);
      }

      if(result.length > 0){
        if(await argon2.verify(result[0]['password'], password)){
          res.status(200).json({ message: 'Login successful' });
        }else{
          return res.status(401).json({ error: 'Invalid credentials' });
        }
      }else{
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    });

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//PASSWORD RECOVERY
app.post('/api/send-token', async (req, res) => {
  try {
    const token = crypto.randomBytes(20).toString('hex');
    let email = req.body.email;

    let sql = "INSERT INTO token VALUES(NULL, ?, ?, NOW())";

    con.query(sql, [email, token], async (err, result) => {
      if(err){
        console.log(err);
      }

      const mailOptions = {
        from: 'usersampleclient@gmail.com', // Update with system email address
        to: email, // Update with admin's email address
        subject: `3MV Construction Password Recovery`,
        html: `<p>Click <a href="http://localhost:5173/reset/${token}">here</a> to reset your password. This token will expire in 10 minutes. Ignore if you didn't request this.</p>`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

//PASSWORD RESET
app.post('/api/reset', async (req, res) => {
  try{
    let token = req.body.token;
    let email = req.body.email;
    let password = await argon2.hash(req.body.password);

    let sql = "SELECT * FROM token WHERE email = ? AND token = ? AND TIMESTAMPDIFF(MINUTE, created_at, NOW()) < 10";

    con.query(sql, [email, token], (err, result) => {
      if(err){
        console.log(err);
      }

      if(result.length > 0){
        sql = "UPDATE users SET password = ? WHERE email = ?";

        con.query(sql, [password, email], (err, result) => {
          if(err){
            console.log(err);
          }
          res.status(201).json({ message: 'Password reset success' });
        });
      }else{
        return res.status(401).json({ error: 'Token is invalid' });
      }
    });
  
  } catch (error) {
    console.error('Error reseting password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
