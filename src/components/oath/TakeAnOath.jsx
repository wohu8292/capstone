import React, { useState } from "react";

const TakeAnOath = () => {
  const [formData, setFormData] = useState({
    agreeTo: "",
    willSupport: "",
    willBecome: "",
    signature: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="py-44 flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-xl font-semibold mb-8">Take An Oath</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <div className="flex flex-col">
          <label className="mb-1">I agree to:</label>
          <input
            type="text"
            name="agreeTo"
            value={formData.agreeTo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 bg-gray-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">I will support:</label>
          <input
            type="text"
            name="willSupport"
            value={formData.willSupport}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 bg-gray-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">I will become:</label>
          <input
            type="text"
            name="willBecome"
            value={formData.willBecome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 bg-gray-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Sign here:</label>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 bg-gray-200 text-black"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-green-300 text-black font-semibold rounded-md hover:bg-green-400"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default TakeAnOath;
