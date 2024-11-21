import React from "react";
import ResponsiveImage from "./ResponsiveImage";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <div className="w-full h-[393px] bg-black relative">
      <div className="mx-[165px] -top-[380px] inset-0 absolute">
        <div className="relative mt-40 w-full h-[292px] bg-peach rounded-[15px] overflow-hidden">
          <div className="absolute -top-[146px] left-[527px]  flex flex-end items-center justify-center gap-10">
            <ResponsiveImage folder="shared" imageKey="twoCircles" />
          </div>
          <div className="flex absolute top-[146px] left-[235px] gap-[1px]">
            <ResponsiveImage folder="shared" imageKey="threeCircles" />
            <ResponsiveImage folder="shared" imageKey="threeCircles" />
          </div>
          <div className="absolute  w-[459px] h-[174px] top-[72px] left-[95px] gap-[309px]">
            <h1 className="text-h7 text-white">
              Let`&apos;`s talk about your project
            </h1>
            <h1 className="text-body text-white mt-5">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </h1>
          </div>
          <button className="absolute top-[118px] left-[863px] bg-white text-black py-[17px] px-[18px] rounded-md w-[152px] h-[56px] hover:bg-light-peach ">
            <span className="text-h5 ">GET IN TOUCH</span>
          </button>
        </div>
      </div>
      <div className="absolute top-[100px] left-[160px] w-[1096px] h-[177px] flex flex-col text-white">
        <div className="text-h4">
          <NavBar />
        </div>

        <hr className="w-full h-[1px] bg-white mt-[40px]" />
        <div className="mt-[31px] flex w-full gap-10 ">
          <div className="flex flex-col gap-2 w-[350px] h-[78px]">
            <h1 className="text-body font-bold">Designo Central Office</h1>
            <h1 className="text-body">3886 Wellington Street</h1>
            <h1 className="text-body">Toronto, Ontario M9C 3J5</h1>
          </div>
          <div className="flex flex-col gap-2 w-[350px] h-[78px]">
            <h1 className="text-body font-bold">Contact Us (Central Office)</h1>
            <h1 className="text-body">P : +1 253-863-8967</h1>
            <h1 className="text-body">M :contact@designo.co</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
