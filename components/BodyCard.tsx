import React from "react";
import ResponsiveImage from "./ResponsiveImage";

const BodyCard = () => {
  return (
    <div className="w-[350px] h-[478px] flex flex-col items-center bg-lighter-peach rounded-[15px] overflow-hidden">
      <div className="w-full h-[320px]">
        <ResponsiveImage folder="webDesign" imageKey="express" />
      </div>
      <h1 className="mt-8 text-h3 text-peach">EXPRESS</h1>
      <div className="mx-8 mt-4">
        <p className="text-body text-center">
          A multi-carrier shipping website for ecommerce businesses
        </p>
      </div>
    </div>
  );
};

export default BodyCard;
