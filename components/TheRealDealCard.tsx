import React from "react";
import ResponsiveImage from "./ResponsiveImage";

const TheRealDealCard = () => {
  return (
    <div className="relative h-[620px] mx-[164px] bg-lighter-peach  rounded-[15px] mt-40 overflow-hidden">
      <div className="absolute top-[56px] left-0 overflow-hidden">
        <ResponsiveImage folder="shared" imageKey="threeCircles" />
      </div>
      <div className="absolute top-[154px] left-[95px] w-[445px] h-[332px]">
        <h1 className="text-h8 text-peach">World-class talent</h1>
        <p className="mt-8 text-body">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className="mt-8 text-body">
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
      <div className="absolute top-0 left-[634px] rounded-md">
        <ResponsiveImage folder="about" imageKey="talent" />
      </div>
    </div>
  );
};

export default TheRealDealCard;
