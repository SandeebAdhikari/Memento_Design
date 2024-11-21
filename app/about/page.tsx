import AboutUsCard from "@/components/AboutUsCard";
import LocationCard from "@/components/LocationCard";
import WorldClassTalentCard from "@/components/WorldClassTalentCard";
import { locations } from "@/constants/constant";

import React from "react";

const page = () => {
  return (
    <>
      <AboutUsCard />
      <WorldClassTalentCard />
      <div className="mx-[164px] flex justify-center">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            country={location.country}
            countryImage={location.countryImage}
          />
        ))}
      </div>
    </>
  );
};

export default page;
