import { useState } from "react";

const titles = [
  { 
    title: "Deliverable", 
    content: [
      { heading: "What are deliverables?", text: "A deliverable is a tangible or intangible outcome of a project, typically provided to stakeholders. Examples include reports, designs, and prototypes." },
      { heading: "Tools for deliverables", text: "Common tools include project management software, design tools, and documentation frameworks to ensure smooth development." },
      { heading: "How to make deliverables more sustainable?", text: "Use eco-friendly materials, digital documents instead of paper, and energy-efficient design processes to minimize waste." },
      { heading: "How is success defined?", text: "Success is measured by meeting project goals, stakeholder satisfaction, and the impact of the deliverable." },
    ]
  },
  { 
    title: "Brainstorming", 
    content: [
      { heading: "What is brainstorming?", text: "Brainstorming is a creative process used to generate ideas and solutions through open discussion and free thinking." },
      { heading: "Tools for brainstorming", text: "Popular tools include whiteboards, mind-mapping software, and collaborative digital platforms like Miro and FigJam." },
      { heading: "How to make brainstorming more effective?", text: "Encourage open participation, avoid immediate criticism, and use structured techniques like SCAMPER or Six Thinking Hats." },
      { heading: "How is success defined?", text: "Success is defined by the diversity and feasibility of generated ideas and their alignment with project goals." },
    ]
  },
  { 
    title: "Prototyping", 
    content: [
      { heading: "What is prototyping?", text: "Prototyping is the process of creating an early model of a product to test concepts, gather feedback, and refine the design." },
      { heading: "Tools for prototyping", text: "Figma, Adobe XD, Sketch, and low-code platforms help in rapid prototyping and design validation." },
      { heading: "How to improve prototyping?", text: "Use rapid iterations, test with real users, and focus on functionality over aesthetics in early stages." },
      { heading: "How is success defined?", text: "A prototype is successful if it effectively communicates the idea and gathers valuable feedback for refinement." },
    ]
  },
  { 
    title: "Iteration", 
    content: [
      { heading: "What is iteration?", text: "Iteration is the process of refining and improving a project through repeated cycles of testing and feedback." },
      { heading: "Tools for iteration", text: "Agile boards, feedback loops, and version control systems help track iterative progress." },
      { heading: "How to make iteration efficient?", text: "Set clear objectives, gather targeted feedback, and make incremental changes to avoid major setbacks." },
      { heading: "How is success defined?", text: "Success is achieved when improvements enhance functionality, usability, and overall project quality." },
    ]
  },
];

const RotatingClock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTitleClick = (index) => {
    setCurrentIndex(index);
  };

  const rotationDegree = (360 / titles.length) * currentIndex;

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white flex flex-col items-center justify-center h-full space-y-16 pb-24">
      {/* Rotating Clock */}
      <div className="relative w-64 h-64 border-2 border-third_color rounded-full bg-gray-900 shadow-lg mt-64 mb-12">
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
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold cursor-pointer p-2 rounded-md shadow-sm ${
                index === currentIndex ? 'text-third_color bg-gray-1000' : 'text-fourth_color bg-gray-700'
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => handleTitleClick(index)}
            >
              {item.title}
            </div>
          );
        })}
      </div>

      {/* 2x2 Grid for Content Cards */}
      <div className="grid grid-cols-2 gap-6 max-w-4xl">
        {titles[currentIndex].content.map((card, i) => (
          <div key={i} className="p-6 border-2 border-third_color rounded-lg bg-gray-900 text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-2 text-third_color">{card.heading}</h3>
            <p className="text-gray-300">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingClock;
