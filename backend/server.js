const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const con = require("./db/connection");
const argon2 = require("argon2");
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend URL
  }));
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let cpassword = req.body.cpassword;
    let hashpass = await argon2.hash(req.body.password);

    if (password !== cpassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    let sql = "SELECT * FROM users WHERE email = ?";

    con.query(sql, [email], (err, result) => {
      if(err){
        console.log(err);
      }

      if(result.length > 0){
        return res.status(401).json({ error: 'Email already in use' });
      }else{
        sql = "INSERT INTO users VALUES (NULL, ?, ?, ?, ?)";

        con.query(sql, [fname, lname, email, hashpass], (err, result) => {
          if(err){
            console.log(err);
          }
          res.status(201).json({ message: 'User registered successfully' });
        });
      }
    });

  } catch (error) {
    console.error('Error registering user:', error);
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
    console.error('Error logging in:', error);
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

//GET PROJECTS
app.get('/api/get/projects', async(req, res) =>{
  try{
    let sql = "SELECT * FROM projects";

    con.query(sql, (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({result});
    });

  }catch (error){
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//ADD PROJECT
app.post('/api/add/project', async(req, res) =>{
  try{
    let pid = req.body.pid;
    let name = req.body.name;
    let category = req.body.category;
    let location = req.body.location;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;

    let sql = "INSERT INTO projects VALUES (NULL, ?, ?, ?, ?, ?, ?)";

    con.query(sql, [pid, name, category, location, startDate, endDate], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Project added successfully'});
    });

  }catch (error){
    console.error('Error adding project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//EDIT PROJECT
app.post('/api/edit/project', async(req, res) =>{
  try{
    let id = req.body.id;
    let pid = req.body.pid;
    let name = req.body.name;
    let category = req.body.category;
    let location = req.body.location;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;

    let sql = "UPDATE projects SET pid = ?, name = ?, category = ?, location = ?, start_date = ?, end_date = ? WHERE id = ?";

    con.query(sql, [pid, name, category, location, startDate, endDate, id], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Project edited successfully'});
    });

  }catch (error){
    console.error('Error editing project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//DELETE PROJECT
app.post('/api/delete/project', async(req, res) =>{
  try{
    let id = req.body.id;

    let sql = "DELETE FROM projects WHERE id = ?";

    con.query(sql, [id], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Project deleted successfully'});
    });

  }catch (error){
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//GET CUSTOMERS
app.get('/api/get/customers', async(req, res) =>{
  try{
    let sql = "SELECT * FROM customers";

    con.query(sql, (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({result});
    });

  }catch (error){
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//ADD CUSTOMER
app.post('/api/add/customer', async(req, res) =>{
  try{
    let cid = req.body.cid;
    let name = req.body.name;
    let num = req.body.num;
    let email = req.body.email;
    let project = req.body.project;
    let category = req.body.category;
    let total = req.body.total;
    let paid = req.body.paid;
    let balance = req.body.balance;

    let sql = "INSERT INTO customers VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    con.query(sql, [cid, name, num, email, project, category, total, paid, balance], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Customer added successfully'});
    });

  }catch (error){
    console.error('Error adding customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//EDIT CUSTOMER
app.post('/api/edit/customer', async(req, res) =>{
  try{
    let id = req.body.id;
    let cid = req.body.cid;
    let name = req.body.name;
    let num = req.body.num;
    let email = req.body.email;
    let project = req.body.project;
    let category = req.body.category;
    let total = req.body.total;
    let paid = req.body.paid;
    let balance = req.body.balance;

    let sql = "UPDATE customers SET cid = ?, name = ?, num = ?, email = ?, project = ?, category = ?, total = ?, paid = ?, balance = ? WHERE id = ?";

    con.query(sql, [cid, name, num, email, project, category, total, paid, balance, id], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Customer edited successfully'});
    });

  }catch (error){
    console.error('Error editing customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//DELETE CUSTOMER
app.post('/api/delete/customer', async(req, res) =>{
  try{
    let id = req.body.id;

    let sql = "DELETE FROM customers WHERE id = ?";

    con.query(sql, [id], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Customer deleted successfully'});
    });

  }catch (error){
    console.error('Error deleting customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//GET EMPLOYEES
app.get('/api/get/employees', async(req, res) =>{
  try{
    let sql = "SELECT * FROM employees";

    con.query(sql, (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({result});
    });

  }catch (error){
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// IMAGE UPLOADER INTITIALIZATION
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Set the upload directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

//ADD EMPLOYEE
app.post('/api/add/employee', upload.single('attachment'), async(req, res) =>{
  try{
    let eid = req.body.eid;
    let name = req.body.name;
    let position = req.body.position;
    let department = req.body.department;
    let email = req.body.email;
    let number = req.body.number;
    let attachmentPath = req.file ? req.file.path : '';

    let sql = "INSERT INTO employees VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)";

    con.query(sql, [eid, name, position, department, email, number, attachmentPath], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Employee added successfully'});
    });

  }catch (error){
    console.error('Error adding employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//EDIT EMPLOYEE
app.post('/api/edit/employee', upload.single('attachment'), async(req, res) =>{
  try{
    let id = req.body.id;
    let eid = req.body.eid;
    let name = req.body.name;
    let position = req.body.position;
    let department = req.body.department;
    let email = req.body.email;
    let number = req.body.number;
    let attachmentPath = req.file ? req.file.path : '';
    let sql = '';
    if(req.file){
      sql = "UPDATE employees SET eid = ?, fullname = ?, position = ?, department = ?, email = ?, contact = ?, image = ? WHERE id = ?";

      con.query(sql, [eid, name, position, department, email, number, attachmentPath, id], (err, result) => {
        if(err){
          console.log(err);
        }
        res.status(201).json({message: 'Employee edited successfully'});
      });
    }else{
      sql = "UPDATE employees SET eid = ?, fullname = ?, position = ?, department = ?, email = ?, contact = ? WHERE id = ?";

      con.query(sql, [eid, name, position, department, email, number, id], (err, result) => {
        if(err){
          console.log(err);
        }
        res.status(201).json({message: 'Employee edited successfully'});
      });
    }


   

  }catch (error){
    console.error('Error editing employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//DELETE EMPLOYEE
app.post('/api/delete/employee', async(req, res) =>{
  try{
    let id = req.body.id;

    let sql = "DELETE FROM employees WHERE id = ?";

    con.query(sql, [id], (err, result) => {
      if(err){
        console.log(err);
      }
      res.status(201).json({message: 'Employee deleted successfully'});
    });

  }catch (error){
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
