import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div  className="text border-t-2 border-b-2 -mb-10 border-zinc-400 overflow-hidden flex  whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className='text-[22vw] tracking-tighter leading-none uppercase font-["Test FoundersGrotesk"] font-bold -mb-[1vw] mt-[-55px] pr-12'
        >
          WE are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className='text-[22vw] tracking-tighter leading-none uppercase font-["Test FoundersGrotesk"] font-bold -mb-[1vw] mt-[-55px] pr-12'
        >
          WE are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
