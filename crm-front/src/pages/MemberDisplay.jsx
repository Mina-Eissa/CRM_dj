import React, { useState } from "react";
const MemberDisplay = ({ member, onSave }) => {
    const [formData, setFormData] = useState(member);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 border border-gray-300 rounded">
        <h2 className="text-xl font-bold mb-4">Modify Member</h2>
        {Object.keys(member).map((key) => (
          key !== "id" && (
            <div className="mb-4" key={key}>
              <label className="block text-gray-700 font-bold mb-2" htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                id={key}
                name={key}
                value={formData[key] || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )
        ))}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save
        </button>
      </form>
    );
};

export default MemberDisplay;
