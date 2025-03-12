import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const items = [
  { title: "Basic Needs Center", category: "Brainstorming", location: "On Campus", link: "#", description: "Essential resources for what you need the most" },
  { title: "Distribution Center", category: "Brainstorming", location: "On Campus", link: "#", description: "CU Boulders material management" },
  { title: "Environmental Center", category: "Brainstorming", location: "On Campus", link: "#", description: "Main sustainability CU resource" },
  { title: "Grounds Recycling Operations", category: "Brainstorming", location: "On Campus", link: "#", description: "Recycling resource CU Boulder " },
  { title: "Boulder Sports Recycler", category: "Brainstorming", location: "In Boulder", link: "#", description: "A sports thrift store" },
  { title: "Ecocycle CHARM", category: "Brainstorming", location: "In Boulder", link: "#", description: "Hard to recycle material thrift store" },
  { title: "Surplus Store", category: "Brainstorming", location: "In Boulder", link: "#", description: "Showcase your work at CU events." },
  { title: "Goodwill Outlet", category: "Brainstorming", location: "Near Boulder", link: "#", description: "A thrift store for buying reused material" },
  
  { title: "example resource1", category: "Prototyping", location: "On Campus", link: "#", description: "exampleDescription"},
  { title: "example resource2", category: "Prototyping", location: "In Boulder", link: "#", description: "exampleDescription"},
  { title: "example resource3", category: "Prototyping", location: "Near Boulder", link: "#", description: "exampleDescription"},
  { title: "example resource4", category: "Prototyping", location: "Online", link: "#", description: "exampleDescription"},

  { title: "example resource1", category: "Iteration", location: "On Campus", link: "#", description: "exampleDescription"},
  { title: "example resource2", category: "Iteration", location: "In Boulder", link: "#", description: "exampleDescription"},
  { title: "example resource3", category: "Iteration", location: "Near Boulder", link: "#", description: "exampleDescription"},
  { title: "example resource4", category: "Iteration", location: "Online", link: "#", description: "exampleDescription"},

  { title: "example resource1", category: "Deliverables", location: "On Campus", link: "#", description: "exampleDescription"},
  { title: "example resource2", category: "Deliverables", location: "In Boulder", link: "#", description: "exampleDescription"},
  { title: "example resource3", category: "Deliverables", location: "Near Boulder", link: "#", description: "exampleDescription"},
  { title: "example resource4", category: "Deliverables", location: "Online", link: "#", description: "exampleDescription"},
];

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const categories = ["All", "Brainstorming", "Prototyping", "Iteration", "Deliverables"];
  const locations = ["On Campus", "In Boulder", "Near Boulder", "Online"];

  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="max-w-screen-lg mx-auto font-arimo px-4 sm:px-6 lg:px-8 pt-8">
      {/* Category Bar */}
      <div className="border border-yellow-500 rounded-md p-3 mb-4">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base rounded-md font-semibold transition ${
                selectedCategory === category ? "bg-third_color text-black" : "bg-gray-800 text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Accordion */}
      {categories.map(
        (category) =>
          (selectedCategory === "All" || selectedCategory === category) &&
          filteredItems.some((item) => item.category === category) && (
            <div key={category} className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-primaryGold bg-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-md">
                {category}
              </h3>
              {locations.map((location) => {
                const locationKey = `${category}-${location}`;
                return (
                  <div key={locationKey} className="border border-yellow-500 rounded-md mt-2 bg-gray-100">
                    <button
                      onClick={() => toggleAccordion(locationKey)}
                      className="w-full flex justify-between items-center px-4 sm:px-6 py-2 bg-third_color text-black font-bold text-base sm:text-lg"
                    >
                      <span className="flex-1 text-left">{location}</span>
                      {openIndexes[locationKey] ? <FiMinus size={22} /> : <FiPlus size={22} />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all ease-in-out duration-500 ${
                        openIndexes[locationKey] ? "max-h-[400px] p-4 sm:p-6" : "max-h-0 p-0"
                      }`}
                    >
                      <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                        {filteredItems
                          .filter((item) => item.category === category && item.location === location)
                          .map((item, idx) => (
                            <li key={idx} className="break-words">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-base sm:text-lg"
                              >
                                {item.title}
                              </a>
                              <p className="text-sm sm:text-base text-gray-700">{item.description}</p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )
      )}

      {filteredItems.length === 0 && <p className="text-center text-lg">No results found</p>}
    </div>
  );
};

export default Accordion;
