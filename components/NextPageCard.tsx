import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface NextPageCardProps {
  title: string;
  imageKey: string;
}

const NextPageCard: React.FC<NextPageCardProps> = ({ title, imageKey }) => {
  return (
    <div className="relative h-[308px] rounded-[15px] overflow-hidden">
      <div className="absolute w-full h-full bg-black/70 flex flex-col items-center justify-center gap-6 hover:cursor-pointer hover:bg-peach/80 ">
        <h1 className="text-h2 text-white">{title}</h1>
        <h1 className="flex text-h6 text-white gap-[21px]">
          VIEW PROJECTS
          <ResponsiveImage folder="shared" imageKey="rightArrow" />
        </h1>
      </div>
      <ResponsiveImage folder="home" imageKey={imageKey} />
    </div>
  );
};

export default NextPageCard;
