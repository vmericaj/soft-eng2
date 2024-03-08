import React, { useState } from 'react';

const ProjectTable3 = () => {
  // State to control the visibility of the form
  const [isFormVisible, setFormVisible] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return ( 
    <div className="ml-2">
      <button
        style={{ backgroundColor: '#0F076D' }}
        className="inline-flex items-center hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        onClick={toggleForm} // Set the click handler
      >
        + PROJECT
      </button>
      {isFormVisible && ( // Conditionally render the form based on isFormVisible
        <div className="mt-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                Project Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder="Project Name" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectTable3;
