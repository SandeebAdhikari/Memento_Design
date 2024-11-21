import LocationAddressCard from "@/components/LocationAddressCard";
import LocationMapCard from "@/components/LocationMapCard";
import React from "react";
import { officeLocations } from "@/constants/constant";

const countryToMapKey: { [key: string]: string } = {
  Canada: "canada",
  Australia: "australia",
  "United Kingdom": "uk",
};

const page = () => {
  return (
    <div className="mt-16 flex flex-col mx-[164px] gap-8">
      {officeLocations.map((location, index) => (
        <div
          key={index}
          className={`flex  items-center ${
            index % 2 === 0
              ? "justify-between"
              : "flex-row-reverse justify-end gap-4"
          }`}
        >
          <LocationAddressCard
            country={location.country}
            officeName={location.officeName}
            address={location.address}
            city={location.city}
            contact={location.contact}
          />
          <LocationMapCard
            imageKey={
              countryToMapKey[location.country as keyof typeof countryToMapKey]
            }
          />
        </div>
      ))}
    </div>
  );
};

export default page;
