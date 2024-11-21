import ResponsiveImage from "@/components/ResponsiveImage";
import React from "react";

const AboutUsCard = () => {
  return (
    <div className="relative mx-[164px] h-[467px] bg-peach rounded-[15px] mt-[64px] overflow-hidden">
      <div className="absolute -top-[160px] ">
        <ResponsiveImage folder="about" imageKey="hero" />
      </div>
      <div className="absolute top-[135px] left-[95px] w-[540px] h-[210px] flex flex-col gap-8">
        <h1 className="text-h1 text-white">About Us</h1>
        <p className="text-body text-white w-[458px] h-[130px]">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <div className="absolute top-0 left-[635px] h-full rounded-[15px] overflow-hidden">
        <ResponsiveImage folder="about" imageKey="about" />
      </div>
    </div>
  );
};

export default AboutUsCard;
