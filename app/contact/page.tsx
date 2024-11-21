import ContactUsCard from "@/components/ContactUsCard";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/constants/constant";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactUsCard />
      <div className="mt-[40px] mx-[164px] flex">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            country={location.country}
            countryImage={location.countryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
