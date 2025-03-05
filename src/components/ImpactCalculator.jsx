import React, { useState } from "react";

const materials = {
  "Recycled Paper": { carbon: 0.5, waste: 2 },
  "Bamboo Wood": { carbon: 0.8, waste: 1.5 },
  "Plastic": { carbon: 3.0, waste: 5 },
  "Metal": { carbon: 2.5, waste: 4 },
};

const MaterialImpactCalculator = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("Recycled Paper");
  const [quantity, setQuantity] = useState(1);
  const [impact, setImpact] = useState({ carbon: 0.5, waste: 2 });

  const calculateImpact = (material, qty) => {
    const data = materials[material];
    setImpact({
      carbon: (data.carbon * qty).toFixed(2),
      waste: (data.waste * qty).toFixed(2),
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">Material Impact Calculator</h2>
      <label className="block text-sm font-medium text-gray-700">Select Material:</label>
      <select
        className="w-full mt-1 p-2 border rounded-md"
        value={selectedMaterial}
        onChange={(e) => {
          setSelectedMaterial(e.target.value);
          calculateImpact(e.target.value, quantity);
        }}
      >
        {Object.keys(materials).map((material) => (
          <option key={material} value={material}>{material}</option>
        ))}
      </select>
      <label className="block mt-4 text-sm font-medium text-gray-700">Quantity:</label>
      <input
        type="number"
        className="w-full mt-1 p-2 border rounded-md"
        value={quantity}
        min="1"
        onChange={(e) => {
          setQuantity(e.target.value);
          calculateImpact(selectedMaterial, e.target.value);
        }}
      />
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold">Estimated Environmental Impact</h3>
        <p className="mt-2">Carbon Footprint: <span className="font-bold">{impact.carbon} kg CO₂</span></p>
        <p>Waste Reduction: <span className="font-bold">{impact.waste} kg</span></p>
      </div>
    </div>
  );
};

export default MaterialImpactCalculator;