import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState([]); // Initialize as an empty array

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserData((prevUserData) => {
      // Ensure prevUserData is treated as an array
      const updatedData = [...prevUserData, formData];
      console.log(`Updated userData: ${JSON.stringify(updatedData)}`);
      return updatedData;
    });
    setFormData({ name: "", email: "", message: "" }); // Clear the form
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-200 p-6 rounded-lg shadow-md space-y-4 mt-10"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-700">User Data:</h2>
        <ul className="space-y-2">
          {userData.map((user, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-md">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Message:</strong> {user.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
