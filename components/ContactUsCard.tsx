import React from "react";
import ResponsiveImage from "./ResponsiveImage";
import LocationCard from "./LocationCard";
import { locations } from "@/constants/constant";

const ContactUsCard = () => {
  return (
    <div className="relative mx-[164px] h-[480px] bg-peach rounded-[15px] mt-[64px] overflow-hidden">
      <div className="absolute -top-[160px] ">
        <ResponsiveImage folder="about" imageKey="hero" />
      </div>
      <div className="absolute top-[135px] left-[95px] w-[540px] h-[210px] flex flex-col gap-8">
        <h1 className="text-h1 text-white">Contact Us</h1>
        <p className="text-body text-white w-[458px] h-[130px]">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className="absolute top-[55px] left-[635px] w-[380px] h-[371px] ">
        <form className="flex flex-col gap-6 ">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-light-peach"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-light-peach"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-light-peach"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-light-peach"
            rows={4}
          ></textarea>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="w-[152px] h-[56px] bg-white text-black  text-h5 rounded-[15px] hover:bg-light-peach hover:text-white transition-all"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsCard;
