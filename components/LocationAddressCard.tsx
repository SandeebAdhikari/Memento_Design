import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface LocationAddressCardProps {
  country: string;
  officeName: string;
  address: string;
  city: string;
  contact: {
    phone: string;
    email: string;
  };
}

const LocationAddressCard: React.FC<LocationAddressCardProps> = ({
  country,
  officeName,
  address,
  city,
  contact,
}) => {
  return (
    <div className="rounded-[15px]">
      <div className="flex h-[326px] relative">
        <div className="absolute top-4 w-[730px] bg-lighter-peach rounded-[15px]">
          <ResponsiveImage folder="shared" imageKey="twoCircles" />
        </div>
        <div className="absolute top-[88px] left-[95px] w-[540px] h-[150px]">
          <h1 className="text-h2 text-peach">{country}</h1>
          <div className="mt-6 flex w-full gap-4">
            <div className="flex flex-col gap-2 w-[350px] h-[78px]">
              <h1 className="text-body font-bold">{officeName}</h1>
              <h1 className="text-body">{address}</h1>
              <h1 className="text-body">{city}</h1>
            </div>
            <div className="flex flex-col gap-2 w-[350px] h-[78px]">
              <h1 className="text-body font-bold">Contact Us</h1>
              <h1 className="text-body">P : {contact.phone}</h1>
              <h1 className="text-body">M : {contact.email}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAddressCard;
