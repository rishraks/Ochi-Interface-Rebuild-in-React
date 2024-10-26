import { motion } from "framer-motion";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.6" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-60 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((items, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[7vw] h-[4.6vw] relative top-[0.38vw] bg-[url('./assets/landing.jpg')] bg-cover rounded-lg"
                  ></motion.div>
                )}
                <h1 className='uppercase text-[6.5vw] leading-[6vw] tracking-tight font-["Test FoundersGrotesk"] font-medium'>
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-[1.1vw] tracking-tight font-light leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-[1vw] uppercase cursor-pointer hover-fill-div">
            Start the project
          </div>
          <div className="w-12 h-12 border-[1px] border-zinc-400 rounded-full flex items-center justify-center hover-fill-div cursor-pointer">
            <HiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
