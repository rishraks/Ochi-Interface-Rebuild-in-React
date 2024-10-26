import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotateLeftEye, setRotateLeftEye] = useState(0);
  const [rotateRightEye, setRotateRightEye] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Left Eye
      const leftEye = document.getElementById("left-eye").getBoundingClientRect();
      const leftEyeCenterX = leftEye.left + leftEye.width / 2;
      const leftEyeCenterY = leftEye.top + leftEye.height / 2;

      let deltaXLeft = mouseX - leftEyeCenterX;
      let deltaYLeft = mouseY - leftEyeCenterY;

      const angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
      setRotateLeftEye(angleLeft - 180);

      // Right Eye
      const rightEye = document.getElementById("right-eye").getBoundingClientRect();
      const rightEyeCenterX = rightEye.left + rightEye.width / 2;
      const rightEyeCenterY = rightEye.top + rightEye.height / 2;

      let deltaXRight = mouseX - rightEyeCenterX;
      let deltaYRight = mouseY - rightEyeCenterY;

      const angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);
      setRotateRightEye(angleRight - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden cursor-pointer">
      <div data-scroll data-scroll-section data-scroll-speed="-0.7" className="relative w-full h-full bg-cover bg-center bg-[url('./assets/eye_bg.jpg')]">
        <div className="absolute flex gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[95%]">
          {/* Left Eye */}
          <div id="left-eye" className="bg-white w-[14vw] h-[14vw] rounded-full flex justify-center items-center">
            <div className="relative w-40 h-40 bg-zinc-800 rounded-full">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotateLeftEye}deg)` }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div id="right-eye" className="bg-white w-[14vw] h-[14vw] rounded-full flex justify-center items-center">
            <div className="relative w-40 h-40 bg-zinc-800 rounded-full">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotateRightEye}deg)` }}
                className="line absolute w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
