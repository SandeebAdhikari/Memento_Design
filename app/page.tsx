import React from "react";

import ResponsiveImage from "@/components/ResponsiveImage";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div className="flex flex-col mx-[164px] min-h-screen">
      <NavBar />
      <div className="w-full h-[640px] mt-[67px] bg-peach rounded-[15px] relative">
        <div className="absolute top-[145px] left-[95px] w-[540px] h-[350px]">
          <h1 className="text-h1 text-white">
            Award-winning custom designs and digital branding solutions
          </h1>
          <h1 className="text-body text-white mt-10 w-full">
            with over 10 years in the industry, we are experienced in creating
            fully reponsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </h1>
          <button className="mt-10 bg-white text- text-black py-3 px-6 rounded-md w-[152px] h-[56px]">
            LEARN MORE
          </button>
        </div>
        <div className=" absolute top-[0px] left-[455px] right-[0px]">
          <ResponsiveImage folder="about" imageKey="hero" />
        </div>
      </div>
    </div>
  );
};

export default page;
