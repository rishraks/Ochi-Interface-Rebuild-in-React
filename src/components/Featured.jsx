import React, { useState } from "react";

function Featured() {
  const [hoveredTitle, setHoveredTitle] = useState(null); // State to track hovered title

  const handleMouseEnter = (title) => {
    setHoveredTitle(title); // Set the hovered title
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null); // Clear the hovered title
  };

  return (
    <div className="w-full relative">
      <h1 className="py-[11vh] px-[4vw] text-[3.5vw] tracking-tight font-['Neue Montreal']">
        Featured projects
      </h1>
      <div className="w-full border-t-[1px] -mt-[8vh] border-[#e9e9e8] relative">
        <div className="cards flex gap-5">
          {/* First Card */}
          <div className="card py-[2.5vh] ml-[4vw]">
            <div className="text flex gap-3 items-center">
              <h1 className="w-[0.6vw] h-[0.6vw] rounded-full bg-white"></h1>
              <h1 className="uppercase font-['Neue Montreal'] text-[1vw] font-regular tracking-tight">
                cardboard spaceship
              </h1>
            </div>
            <div
              className="group w-[46vw] h-[75vh] mt-[2.5vh] rounded-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-95"
              onMouseEnter={() => handleMouseEnter("CARDBOARD SPACESHIP")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-pointer"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Cardboard Spaceship"
              />
            </div>
            <div className="start flex items-center gap-4">
              <div className="px-6 py-2 border-[1px] border-zinc-400 rounded-full font-regular text-[1vw] uppercase mt-6 hover-fill-div cursor-pointer">
                branded template
              </div>
              <div className="px-6 py-2 border-[1px] border-zinc-400 rounded-full font-regular text-[1vw] uppercase mt-6 hover-fill-div cursor-pointer">
                sales deck
              </div>
              <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-regular text-[1vw] uppercase mt-6 hover-fill-div cursor-pointer">
                social media templates
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="card py-[2.5vh]">
            <div className="text flex gap-3 items-center">
              <h1 className="w-[0.6vw] h-[0.6vw] rounded-full bg-white"></h1>
              <h1 className="uppercase font-['Neue Montreal'] text-[1vw] font-regular tracking-tight">
                AH2 & Matt Horn
              </h1>
            </div>
            <div
              className="group w-[46vw] h-[75vh] mt-[2.5vh] rounded-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-95"
              onMouseEnter={() => handleMouseEnter("AH2 & MATT HORN")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-pointer"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="AH2 & Matt Horn"
              />
            </div>
            <div className="start flex items-center gap-4">
              <div className="px-6 py-2 border-[1px] border-zinc-400 rounded-full font-regular text-[1vw] uppercase mt-6 hover-fill-div cursor-pointer">
                pitch deck
              </div>
            </div>  
          </div>
        </div>

        {/* Display the title in the center of the screen */}
        {hoveredTitle && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <h2 className="text-[#d3e955] text-[5vw] font-['Neue Montreal'] font-semibold tracking-tighter animate-fadeInScale">
              {hoveredTitle}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Featured;
