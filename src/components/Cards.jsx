import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="w-full border-t-[1px] border-[#e9e9e8] mt-[3vh]">
        <div className="cards flex items-center gap-6 ml-[4vw] mt-[5vw]">
          <div className="w-[46vw] h-[50vh] bg-[#004D43] rounded-2xl relative">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize text-[#CDEA68] font-semibold text-[3.6vw] font-['Test FoundersGrotesk']">
              ochi
            </h1>
            <div className="font-['Test FoundersGrotesk'] pl-[2] pr-[2] pt-[1] pb-[6] font-semibold text-[1vw] absolute top-[84%] left-[5%] px-[1vw] py-[0.5vh] border-[1px] rounded-full items-center justify-center border-[#CDEA68] text-[#CDEA68]">
              &copy;2019-2022
            </div>
          </div>
          <div className="w-[22vw] h-[50vh] bg-[#212121] rounded-2xl relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
              style={{ width: "40%", height: "auto" }}
            />
            <div className="hover-fill-div w-[12vw] h-[4.5vh] tracking-tighter uppercase font-['Test FoundersGrotesk']  font-semibold text-[1vw] absolute top-[84%] left-[5%] translate-x-5 border-[1px] rounded-full flex items-center justify-center border-[#ffffff] text-[#ffffff] cursor-pointer">
              Rating 5.0 on clutch
            </div>
          </div>
          <div className="w-[22vw] h-[50vh] bg-[#212121] rounded-2xl relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover "
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
              style={{ width: "35%", height: "auto" }}
            />
            <div className="hover-fill-div w-[15vw] h-[4.5vh] tracking-tighter uppercase font-['Test FoundersGrotesk']  font-semibold text-[1vw] absolute top-[84%] left-[5%] translate-x-5 border-[1px] rounded-full flex items-center justify-center border-[#ffffff] text-[#ffffff] cursor-pointer">
              business bootcamp alumni
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
