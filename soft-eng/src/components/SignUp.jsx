import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/BG.jpg"; // replace with your actual image path
import logo from "../assets/se.png";
import someImage from "../assets/Facebook.png";
import someImage1 from "../assets/Google.png";
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: ''
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

      const response = await axios.post('http://localhost:5000/api/signup', formData);
      // console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Registration successful!'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/login';
        }
        });
    
    } catch (error) {
      // console.error('Error registering user:', error);
      if(error.response.status == 401){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email already in use. Please register a new email or login.'
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to register user. Please try again later.'
        });
      }
    }
  };

  return (
    <div 
      className="flex justify-center items-center h-screen" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className=" bg-white rounded p-8 m-4 max-w-lg w-full space-y-8">
        <div className="text-center">
            <div className="flex justify-center mb-6">
              {/* Make logo clickable by wrapping with Link */}
              <Link to="/"> {/* Replace with your destination path */}
                <img src={logo} alt="Logo" className="w-24 h-auto" /> {/* Logo */}
              </Link>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-customOrange">
                CREATE ACCOUNT
            </h2>
        </div>

        {/* FOOOORM */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="first-name" className="block text-sm font-medium text-customOrange">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      name="fname"
                      value={formData.fname} 
                      onChange={handleChange}
                      type="text"
                      autoComplete="given-name"
                      required
                      className="appearance-none rounded relative italic block w-full px-3 py-2 border-2 border-customOrange placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                      placeholder="First Name"
                    />
              </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-customOrange">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        name="lname"
                        value={formData.lname} 
                        onChange={handleChange}
                        type="text"
                        autoComplete="given-name"
                        required
                        className="appearance-none rounded relative italic block w-full px-3 py-2 border-2 border-customOrange placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                        placeholder="Last Name"
                      />
                </div>
                      <div className="w-full px-3 mt-6 md:mt-3">
                        <label htmlFor="additional-info" className="block text-sm font-medium text-customOrange">
                          Email Address
                        </label>
                        <input
                          id="additional-info"
                          name="email"
                          value={formData.email} 
                          onChange={handleChange}
                          type="text"
                          autoComplete="off"
                          required
                          className="appearance-none rounded relative italic block w-full px-3 py-2 border-2 border-customOrange placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                          placeholder="Email Address"
                        />
                  </div>
                        <div className="w-full md:w-1/2 px-3 mt-6 md:mt-2">
                          <label htmlFor="field4" className="block text-sm font-medium text-customOrange">
                            Password
                          </label>
                          <input
                            id="field4"
                            name="password"
                            value={formData.password} 
                            onChange={handleChange}
                            type="text"
                            autoComplete="off"
                            required
                            className="appearance-none rounded relative italic block w-full px-3 py-2 border-2 border-customOrange placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                            placeholder="Password"
                          />
                  </div>
                          <div className="w-full md:w-1/2 px-3 mt-6 md:mt-2">
                            <label htmlFor="field5" className="block text-sm font-medium text-customOrange">
                              Confirm Password
                            </label>
                            <input
                              id="field5"
                              name="cpassword"
                              value={formData.cpassword} 
                              onChange={handleChange}
                              type="text"
                              autoComplete="off"
                              required
                              className="appearance-none rounded relative italic block w-full px-3 py-2 border-2 border-customOrange placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                              placeholder="Confirm Password"
                            />
                    </div>
                    <div className="w-full px-3 mt-6">
                      <button
                        type="submit"
                        className="w-full bg-black hover:bg-indigo-700 text-customOrange font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        REGISTER
                      </button>
                    </div>
              </div>
              
          </div>
      </form>


          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  or continue with
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-6 mx-auto w-full md:max-w-md mb-2">
    {/* Separator with text */}
    
    <button className="flex items-center justify-center px-4 mx-auto w-full py-2 rounded shadow-md text-white bg-black bg-opacity-20">
        <img src={someImage} alt="Facebook" className="w-6 h-6 mr-2" /> {/* Replace with your Facebook icon path */}
        Continue with Facebook
    </button>
    <button className="flex items-center justify-center px-4 py-2 mx-auto w-full rounded shadow-md text-white bg-black bg-opacity-20">
        <img src={someImage1} alt="Google" className="w-6 h-6 mr-2" /> {/* Replace with your Google icon path */}
        Continue with Google
    </button>
</div>
          </div>
          <div className="mt-6 text-center text-sm">
  <label className="inline-flex items-center">
    <input type="checkbox" className="form-checkbox" required />
    <span className="ml-2">
      By clicking Create Account, you agree to 3MV Construction's
      <Link to="/user-agreement" className="text-customOrange hover:underline"> User Agreement</Link>,
      <Link to="/privacy-policy" className="text-customOrange hover:underline"> Privacy Policy</Link>, and
      <Link to="/cookie-policy" className="text-customOrange hover:underline"> Cookie Policy</Link>.
    </span>
  </label>
</div>
          
        </div>
      </div>
    );
  };
  
  export default SignUp;
  
