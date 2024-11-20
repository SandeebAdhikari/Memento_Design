import React from "react";

import ResponsiveImage from "@/components/ResponsiveImage";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div className="flex flex-col mx-[164px] min-h-screen">
      <NavBar />
      <div className="w-full h-[640px] mt-[67px] bg-peach rounded-[15px] relative overflow-hidden">
        <div className="absolute top-[145px] left-[95px] w-[540px] h-[350px]">
          <h1 className="text-h1 text-white">
            Award-winning custom designs and digital branding solutions
          </h1>
          <h1 className="text-body text-white mt-10 w-full">
            with over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </h1>
          <button className="mt-10 bg-white text- text-black py-3 px-6 rounded-md w-[152px] h-[56px] hover:bg-light-peach">
            LEARN MORE
          </button>
        </div>
        <div className=" absolute top-[0px] left-[455px] right-[0px]">
          <ResponsiveImage folder="home" imageKey="hero" />
        </div>
        <div className="absolute  top-[-30px] left-[550px] right-[-84px] overflow-y-hidden">
          <ResponsiveImage folder="home" imageKey="heroPhone" />
        </div>
      </div>
      <div className="mt-[160px] w-full h-[632px] flex gap-[30px] ">
        <div className="relative w-1/2 h-full rounded-[15px] overflow-hidden flex items-center justify-center">
          <div className="absolute  w-full h-full bg-black/70  flex flex-col items-center justify-center gap-6">
            <h1 className="text-h2 text-white">WEB DESIGN</h1>
            <h1 className="flex text-h6 text-white gap-[21px]">
              VIEW PROJECTS
              <ResponsiveImage folder="shared" imageKey="rightArrow" />
            </h1>
          </div>
          <ResponsiveImage folder="home" imageKey="webDesignLarge" />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          <div className="relative h-[308px] rounded-[15px] overflow-hidden">
            <div className="absolute  w-full h-full bg-black/70 flex flex-col items-center justify-center gap-6">
              <h1 className="text-h2 text-white">APP DESIGN</h1>
              <h1 className="flex text-h6 text-white gap-[21px]">
                VIEW PROJECTS
                <ResponsiveImage folder="shared" imageKey="rightArrow" />
              </h1>
            </div>
            <ResponsiveImage folder="home" imageKey="appDesign" />
          </div>
          <div className="relative h-[308px] rounded-[15px] overflow-hidden">
            <div className="absolute  w-full h-full bg-black/70  flex flex-col items-center justify-center gap-6">
              <h1 className="text-h2 text-white">GRAPHIC DESIGN</h1>
              <h1 className="flex text-h6 text-white gap-[21px]">
                VIEW PROJECTS
                <ResponsiveImage folder="shared" imageKey="rightArrow" />
              </h1>
            </div>
            <ResponsiveImage folder="home" imageKey="graphicDesign" />
          </div>
        </div>
      </div>
      <div className="mt-40 flex w-full h-[412px] gap-8">
        <div className="bg-black w-[350px] h-full"></div>
        <div className="bg-black w-[350px] h-full"></div>
        <div className="bg-black w-[350px] h-full"></div>
      </div>
      <div className="mt-40 w-full h-[412px] bg-black"></div>
    </div>
  );
};

export default page;
