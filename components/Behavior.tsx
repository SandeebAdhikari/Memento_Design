import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface SectionProps {
  title: string;
  description: string;
  circleImageFolder: string;
  circleImageKey: string;
  foregroundImageFolder: string;
  foregroundImageKey: string;
}

const Behavior: React.FC<SectionProps> = ({
  title,
  description,
  circleImageFolder,
  circleImageKey,
  foregroundImageFolder,
  foregroundImageKey,
}) => {
  return (
    <div className="w-[350px] h-full flex flex-col items-center justify-center">
      <div className="relative w-[202px] h-[202px]">
        <div className="absolute w-full h-full">
          <ResponsiveImage
            folder={circleImageFolder}
            imageKey={circleImageKey}
          />
        </div>

        <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ResponsiveImage
            folder={foregroundImageFolder}
            imageKey={foregroundImageKey}
          />
        </div>
      </div>
      <h1 className="text-h3 text-dark-grey text-center mt-10">{title}</h1>
      <h1 className="text-body text-dark-grey text-center mt-5">
        {description}
      </h1>
    </div>
  );
};

export default Behavior;
