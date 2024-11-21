import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface LocationCardProps {
  country: string;
  countryImage: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  country,
  countryImage,
}) => {
  return (
    <div className="mt-40  flex flex-col w-[350px] h-[364px] ">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute">
          <ResponsiveImage folder="shared" imageKey="smallCircle" />
        </div>
        <div className="absolute">
          <ResponsiveImage folder="shared" imageKey={countryImage} />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-8">
        <h1 className="text-h3">{country}</h1>
        <button className="w-[152px] h-[56px] bg-peach text-white rounded-md hover:bg-light-peach">
          SEE LOCATION
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
