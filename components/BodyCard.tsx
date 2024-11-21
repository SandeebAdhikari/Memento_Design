import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface BodyCardProps {
  folder: string;
  imageKey: string;
  title: string;
  description: string;
}

const BodyCard: React.FC<BodyCardProps> = ({
  folder,
  imageKey,
  title,
  description,
}) => {
  return (
    <div className="group w-[350px] h-[478px] flex flex-col items-center bg-lighter-peach rounded-[15px] overflow-hidden hover:bg-peach hover:cursor-pointer">
      <div className="w-full h-[320px]">
        <ResponsiveImage folder={folder} imageKey={imageKey} />
      </div>
      <h1 className="mt-8 text-h3 text-peach group-hover:text-white">
        {title}
      </h1>
      <div className="mx-8 mt-4">
        <p className="text-body text-center group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BodyCard;
