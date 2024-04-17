import { useState } from 'react';
// Import your logo image
import logoImage from '../assets/se.png';
import backgroundImage from "../assets/BG.jpg";

const CreateAccount = () => {
  // States for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the account creation logic here
    if (password !== confirmPassword) {
      // Handle mismatched passwords
      console.error('Passwords do not match.');
    } else {
      // Proceed with account creation
    }
  };

  return (
    
    <div 
      className="flex flex-col items-center justify-center p-6 min-h-screen bg-no-repeat bg-cover" 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={logoImage} alt="Company Logo" className="w-32 h-32 mb-4" />
      <h2 className="text-2xl font-bold text-white mb-4">CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-[#EF9400] p-2 w-1/2"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-[#EF9400] p-2 w-1/2"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#EF9400] p-2 w-full mb-2"
        />
        <div className="flex gap-2 mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#EF9400] p-2 w-1/2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-[#EF9400] p-2 w-1/2"
          />
        </div>
        
        <div className="flex items-center border-2 border-orange-400 p-2 w-full">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="flex-1"
          />
          <span className="ml-2">👁️</span>
        </div>
        {password && confirmPassword && password !== confirmPassword && (
          <p className="text-red-500 text-sm mt-2">
            Password didnt match. Try again.
          </p>
        )}
        <button
          type="submit"
          className="mt-4 w-full bg-orange-500 text-white p-2 rounded"
          >
          Sign Up
        </button>
      </form>
    </div>
    );
};

export default CreateAccount;