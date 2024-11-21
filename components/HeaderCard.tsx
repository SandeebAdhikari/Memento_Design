import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface HeaderCardProps {
  title: string;
  description1: string;
  description2: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  description1,
  description2,
}) => {
  return (
    <div className="w-full h-[252px] bg-peach rounded-[15px] flex flex-col items-center justify-center gap-5 relative overflow-hidden">
      <div className="absolute -top-[146px] left-[527px] flex items-center justify-center gap-10">
        <ResponsiveImage folder="shared" imageKey="threeCircles" />
        <ResponsiveImage folder="shared" imageKey="threeCircles" />
      </div>
      <div className="flex absolute top-[146px] left-[235px] gap-[1px]">
        <ResponsiveImage folder="shared" imageKey="twoCircles" />
      </div>

      <h1 className="text-h1 text-white">{title}</h1>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-body text-white">{description1}</h1>
        <h1 className="text-body text-white">{description2}</h1>
      </div>
    </div>
  );
};

export default HeaderCard;
