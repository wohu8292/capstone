import { useState } from "react";

const titles = [
  { title: "Deliverable", content: "Deliverable content" },
  { title: "Brainstorming", content: "Brainstorming" },
  { title: "Prototyping", content: "Brainstormimg" },
  { title: "Iteration", content: "Iteration" },
];

const RotatingClock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTitleClick = (index) => {
    setCurrentIndex(index);
  };

  const rotationDegree = (360 / titles.length) * currentIndex;

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white flex flex-col items-center justify-center h-full space-y-24 pb-24">
      <div className="relative w-64 h-64 border-2 border-third_color rounded-full bg-gray-900 shadow-lg mt-56 mb-12">
      <div
  className="absolute w-2 h-28 bg-third_color origin-bottom left-1/2 transform -translate-x-1/2 -translate-y-full rounded-full shadow-md transition-transform duration-500 ease-in-out"
  style={{
    transformOrigin: "bottom center",
    transform: `rotate(${rotationDegree}deg)`,
    boxShadow: "0px 0px 12px rgba(255, 215, 0, 0.9)",
  }}
/>
        {titles.map((item, index) => {
          const angle = (360 / titles.length) * index - 90;
          const radian = (angle * Math.PI) / 180;
          const x = 50 + 90 * Math.cos(radian);
          const y = 50 + 70 * Math.sin(radian);
          return (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold cursor-pointer p-2 rounded-md shadow-sm ${index === currentIndex ? 'text-third_color bg-gray-1000' : 'text-fourth_color bg-gray-700'}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => handleTitleClick(index)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="p-6 border-2 border-third_color rounded-lg bg-gray-900 text-white max-w-md text-center shadow-2xl mt-6">
        <h3 className="text-2xl font-bold mb-3 text-third_color tracking-wide uppercase">{titles[currentIndex].title}</h3>
        <p className="text-gray-300 text-lg">{titles[currentIndex].content}</p>
      </div>
    </div>
  );
};

export default RotatingClock;
