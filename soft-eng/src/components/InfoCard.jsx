// InfoCard.jsx
const InfoCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 max-w-sm w-full mb-4">
      <div className="mb-2">
        <div className="text-lg font-bold">{project.name}</div>
        <div className="text-md text-gray-800">{project.position}</div>
      </div>
      <div className="mb-2 text-sm text-gray-600">
        Department: {project.department}
      </div>
      <div className="mb-2 text-sm text-gray-600">
        Email: {project.email}
      </div>
      <div className="mb-2 text-sm text-gray-600">
        Number: {project.number}
      </div>
      {/* Add more fields as necessary */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => { /* function to handle edit */ }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => { /* function to handle removal */ }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
