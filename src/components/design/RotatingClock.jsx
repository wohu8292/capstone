import { useState } from "react";

const titles = [
  { 
    title: "Deliverable", 
    content: [
      { heading: "What are deliverables?", text: "A deliverable is a tangible or intangible outcome of a project, typically provided to stakeholders. Examples include reports, designs, and prototypes." },
      { heading: "Tools for deliverables", text: "Talking with TA’s and Professors about what is expected of you, the syllabus, management software, gantt charts, and documentation." },
      { heading: "How to make deliverables more sustainable?", text: "Figure out how to get everything your professor needs from you in a sustainable amount of time so you are not pressed for time. Nothing is more unsustainable than making silly mistakes because you are tired, stressed, or the professor is simply telling you to start again because you misunderstood the instructions." },
      { heading: "How is success defined?", text: "Success is measured by meeting project goals, teacher satisfaction, and an increase for your mental health over the semester." },
    ]
  },
  { 
    title: "Brainstorming", 
    content: [
      { heading: "What is brainstorming?", text: "Brainstorming is a creative process used to generate ideas and solutions through open discussion and free thinking." },
      { heading: "Tools for brainstorming", text: "Popular tools include whiteboards, mind-mapping software, and collaborative digital platforms like Miro and FigJam." },
      { heading: "How to make brainstorming more effective?", text: "Choose something that you can get personally involved in. Make sure you would want this project or you know that it won’t get thrown away somewhere at the end of the semester. Make sure the product is easily disassembled and recycled if needed." },
      { heading: "How is success defined?", text: "You are excited for something you are making or you believe that you can accomplish making this project while not wasting a lot of time, materials, and money. You know what will happen to your project at the end of the semester." },
    ]
  },
  { 
    title: "Prototyping", 
    content: [
      { heading: "What is prototyping?", text: "Prototyping is the process of creating an early model of a product to test concepts, gather feedback, and refine the design." },
      { heading: "Tools for prototyping", text: "This is heavily dependent on the project but whatever is the cheapest easiest materials or websites you can get your hands on. We recommend talking to your professor if there are any concerns." },
      { heading: "How to improve prototyping?", text: "Use already recycled materials or materials you know you can reuse for other prototypes in the future. Don’t make anything permanent as you will need to redo it at a later date." },
      { heading: "How is success defined?", text: "Success is defined by understanding what has gone wrong or could be improved. At the same time success is also if the prototype can communicate what your project is about." },
    ]
  },
  { 
    title: "Iteration", 
    content: [
      { heading: "What is iteration?", text: "Iteration is the process of refining and improving a project through repeated cycles of testing and feedback." },
      { heading: "Tools for iteration", text: "Your own hands, feedback from users, feedback from professors, sleep, and workshops." },
      { heading: "How to make iteration efficient?", text: "Write down what feedback you have received so you don’t forget it later and make repeating mistakes. Ask for clarification and help when needed. Recording everything you do will help you at the end of the semester. Take notes on what challenges you faced and how you solved them." },
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
    <div className="bg-black text-white flex flex-col items-center justify-center h-full space-y-16 pb-24">
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
