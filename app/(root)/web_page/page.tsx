import BodyCard from "@/components/BodyCard";
import HeaderCard from "@/components/HeaderCard";
import React from "react";

const page = () => {
  return (
    <div className="mx-[164px] ">
      <div className="mt-[64px]">
        <HeaderCard />
      </div>
      <div className="mt-[64px]">
        <BodyCard />
      </div>
    </div>
  );
};

export default page;
