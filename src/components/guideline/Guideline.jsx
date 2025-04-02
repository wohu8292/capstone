import React from "react";
import { FaRecycle, FaTrashAlt, FaLightbulb, FaBatteryFull, FaTv, FaLeaf, FaUtensils, FaTshirt, FaBook, FaMobileAlt } from "react-icons/fa";

const recyclingGuidelines = [
  {
    category: "Recyclable Items",
    icon: <FaRecycle className="text-green-400 text-3xl" />,
    items: [
      "Metal: Aluminum and steel cans (empty and rinsed)",
      "Plastic: Containers labeled #1-5 (empty with caps on)",
      "Paper: Office paper, newspapers, magazines",
      "Cardboard: Flattened boxes (pizza boxes if clean)",
      "Glass: Bottles and jars (rinsed, no caps)"
    ]
  },
  {
    category: "Non-Recyclable Items",
    icon: <FaTrashAlt className="text-red-400 text-3xl" />,
    items: [
      "Plastic bags and wraps: Return to store drop-offs",
      "Styrofoam: Not accepted in standard recycling",
      "Food-contaminated items: Must be composted or trashed",
      "Tanglers: Hoses, cords, ropes, chains"
    ]
  },
  {
    category: "Hard-to-Recycle Materials",
    icon: <FaBatteryFull className="text-yellow-400 text-3xl" />,
    items: [
      "Batteries: Use designated recycling bins on campus",
      "Electronics: Take to e-waste collection sites",
      "Fluorescent bulbs: Dispose at hazardous waste facilities",
      "Textiles: Donate usable clothing, recycle unusable fabric"
    ]
  },
  {
    category: "Compostable Items",
    icon: <FaUtensils className="text-orange-400 text-3xl" />,
    items: [
      "Food scraps: Fruits, vegetables, coffee grounds",
      "Compostable utensils and packaging",
      "Yard waste: Leaves, grass clippings, small branches"
    ]
  },
  {
    category: "Special Recycling Programs",
    icon: <FaTv className="text-blue-400 text-3xl" />,
    items: [
      "Books: Drop off at designated book recycling bins",
      "Cell Phones: Recycle at e-waste centers",
      "Ink Cartridges: Take to office supply stores"
    ]
  },
  {
    category: "Sustainable Practices",
    icon: <FaLeaf className="text-green-500 text-3xl" />,
    items: [
      "Reduce single-use plastics by carrying reusable items",
      "Compost food waste whenever possible",
      "Buy products made from recycled materials",
      "Participate in CU Boulder's zero-waste programs"
    ]
  }
];

const Guideline = () => {
  return (
    <div className="py-64 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-third_color tracking-wider">CU Boulder Recycling Guide</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recyclingGuidelines.map((section, index) => (
          <div key={index} className="p-6 border border-gray-600 rounded-lg bg-gray-800 shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex items-center space-x-3 mb-3">
              {section.icon}
              <h2 className="text-2xl font-semibold text-third_color">{section.category}</h2>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-third_color transition-colors duration-200">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 text-gray-400 text-sm">
        For more details, visit the official CU Boulder Recycling Guide:
        <a
          href="https://www.colorado.edu/ecenter/programs/zero-waste-programs-and-events/recycle/materials-recycling"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          Click here
        </a>
      </p>
    </div>
  );
};

export default Guideline;