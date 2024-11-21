import React from "react";
import ResponsiveImage from "./ResponsiveImage";

const WorldClassTalentCard = () => {
  return (
    <div className="relative h-[640px] mx-[164px] bg-lighter-peach  rounded-[15px] mt-40 overflow-hidden">
      <div className="absolute top-[56px] left-[330px] ">
        <ResponsiveImage folder="shared" imageKey="threeCircles" />
      </div>
      <div className="absolute top-[154px] left-[570px] w-[445px] h-[332px]">
        <h1 className="text-h8 text-peach">World-class talent</h1>
        <p className="mt-8 text-body">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className="mt-8 text-body">
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
      <div className="absolute top-0 left-0">
        <ResponsiveImage folder="about" imageKey="talent" />
      </div>
    </div>
  );
};

export default WorldClassTalentCard;
