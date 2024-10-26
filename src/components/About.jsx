import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.058" className="w-full py-[13vh] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[3vw] px-[3vw] font-['Neue Montreal'] leading-[3.5vw] tracking-tighter pr-[13vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] mt-[6vh] border-[#404431] flex">
        <div className="w-1/2">
          <h1 className="pl-[3.5vw] text-[3.6vw] font-regular tracking-tighter">
            Our approach:
          </h1>
          <button className="pl-[1.5vw] pr-[1.5vw] items-center mt-[1.4vh] px-[3vw] py-[1.1vw] text-[1vw] flex uppercase font-semibold text-center rounded-full bg-zinc-800 text-white ml-[3.5vw] gap-8">
            Read More
            <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-white "></div>
          </button>
        </div>
        <div className="w-[50vw] h-[70vh] ml-[4vw] mr-[3vw] mt-[2.5vh] rounded-3xl">
          <img className="w-full h-full rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
