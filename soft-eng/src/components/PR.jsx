import { useState } from 'react';
import backgroundImage from "../assets/BG.jpg";
import { MdEmail, MdLockOutline } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const PR = () => {
    const { token } = useParams();

   const [formData, setFormData] = useState({
    email: '',
    password: '',
    cpassword: '',
    token: token
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (formData.password !== formData.cpassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!'
        });
        return;
        }

      const response = await axios.post('http://localhost:5000/api/reset', formData);
      // console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password reset successful!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to a new page
          window.location.href = '/login';
        }
        });
      
    
    } catch (error) {
      console.error('Error registering user:', error);
      if(error.response.status == 401){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Token is invalid. Please request again.'
        }).then((result) => {
            if (result.isConfirmed) {
              // Redirect to a new page
              window.location.href = '/recovery';
            }
            });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to reset. Please try again later.'
        });
      }
    }
  };


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'url("BG.jpg") no-repeat center center',
    backgroundSize: 'cover',
  };

  const formContainerStyle = {
    maxWidth: '490px',
    padding: '20px',
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    textAlign: 'left',
  };

  const headingStyle = {
      fontSize: '28px', // larger text for heading
      margin: '0 0 10px 0', // Adjust margin to your liking
      fontWeight: 'bold',
      padding: '0 0 0 6px'
    };

    const paragraphStyle = {
        fontSize: '14px', // smaller text for paragraph
        margin: '0 0 20px 0', // Adjust margin to your liking
        padding: '0 0 0 6px'
      }

      const inputWrapperStyle = {
          position: 'relative',
          marginBottom: '15px',
        };

  const inputStyle = {
    width: '100%',
    padding: '10px 10px 10px 10px', // left padding to make space for icon
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const iconStyle = {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#999',
      pointerEvents: 'none', // This makes the icon unclickable
    };

  const buttonStyle = {
    width: '100%',
    padding: '10px 15px',
    backgroundColor: '#00008B',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div 
      className="flex justify-center items-center h-screen bg-no-repeat bg-cover" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div style={containerStyle}>
        <div style={formContainerStyle}>
            <h2 style={headingStyle}>Recover Password</h2>
            <p style={paragraphStyle}>
            Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.
            </p>
            <form onSubmit={handleSubmit}>
            <div style={inputWrapperStyle}>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                style={inputStyle}
                required
                />
                <MdEmail style={iconStyle} size="1.5em" />
            </div>
            <div style={inputWrapperStyle}>
                <input
                type="password"
                id="newPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
                style={inputStyle}
                required
                />
                <MdLockOutline style={iconStyle} size="1.5em" />
            </div>
            <div style={inputWrapperStyle}>
                <input
                type="password"
                id="confirmPassword"
                name="cpassword"
                value={formData.cpassword} 
                onChange={handleChange}
                placeholder="Confirm new password"
                style={inputStyle}
                required
                />
                <MdLockOutline style={iconStyle} size="1.5em" />
            </div>
            <button type="submit" style={buttonStyle}>
                Confirm Password
            </button>
            </form>
        </div>
        </div>
    </div>
  );
};

export default PR;