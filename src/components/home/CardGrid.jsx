import React from "react";

const data = [
  { title: "BRAINSTORMING", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "PROTOTYPING", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "ITERATIONS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "DELIVERABLES", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "RESOURCES", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const CardGrid = () => {
  return (
    <div className="relative max-w-4xl mx-auto mt-10 grid grid-cols-2 gap-4 px-6">
      {/* Center Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full border-l-2 border-dashed border-blue-500 transform -translate-x-1/2"></div>

      {/* Left Side */}
      <div className="space-y-4">
        <Card title={data[0].title} content={data[0].content} />
        <Card title={data[2].title} content={data[2].content} />
        <Card title={data[4].title} content={data[4].content} fullWidth />
      </div>

      {/* Right Side */}
      <div className="space-y-4">
        <Card title={data[1].title} content={data[1].content} />
        <Card title={data[3].title} content={data[3].content} />
      </div>
    </div>
  );
};

const Card = ({ title, content, fullWidth }) => {
  return (
    <div className={`border-2 border-green-400 rounded-md p-4 ${fullWidth ? "col-span-2" : ""}`}>
      <h3 className="font-bold text-lg text-green-400">{title}</h3>
      <p className="text-white">{content}</p>
    </div>
  );
};

export default CardGrid;
