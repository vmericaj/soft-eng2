import { useState } from 'react';
import backgroundImage from "../assets/BG.jpg";
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import Swal from 'sweetalert2';

const PasswordRecovery = () => {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/api/send-token', formData); // Replace '/api/send-email' with your backend API endpoint
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Password recovery link sent. Please check your email.'
          });
          formData.email = ''
        } catch (error) {
          console.error('Error singing in:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'There was an error sending recovery link to your email. Please try again later.'
          });
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
            <button type="submit" style={buttonStyle}>
                Send Password Reset Link
            </button>
            </form>
        </div>
        </div>
    </div>
  );
};

export default PasswordRecovery;