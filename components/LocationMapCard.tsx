import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface LocationMapCardProps {
  imageKey: string;
}

const LocationMapCard: React.FC<LocationMapCardProps> = ({ imageKey }) => {
  return (
    <div className="w-[350px] h-[290px] rounded-[15px] overflow-hidden">
      <ResponsiveImage folder="locations" imageKey={imageKey} />
    </div>
  );
};

export default LocationMapCard;
