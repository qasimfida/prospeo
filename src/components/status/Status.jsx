import React from "react";
import { statsSection } from "../../lib/data";

const Status = () => {
  const { title, description, author, stats, backgrounds } = statsSection;

  return (
    <div className="relative bg-[#0C0202] w-[1196px] mx-auto mb-[50px] h-[527px] text-white rounded-[20px] overflow-hidden">
      <div
        className="absolute left-0 right-0 top-0 h-full bg-cover"
        style={{ backgroundImage: `url(${backgrounds.redOverlay})` }}
      ></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-6 max-w-[800px]">{description}</p>
        <div className="flex items-center space-x-3 mb-10">
          <img
            src={author.image}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">{author.name}</span>
          <span className="text-gray-400">{author.role}</span>
        </div>
        <div className="flex justify-center gap-[23px]">
        {stats.map((stat, index) => (
            <div
            key={index}
            className="w-[356.67px] h-[205px] bg-[#FFFFFF1A] rounded-[26.8px] border border-[#231915] backdrop-blur-[10.9px] shadow-[inset_0px_0px_20px_10px_rgba(255,227,80,0.15)] flex flex-col items-center relative overflow-hidden"
            >
            <div className="text-center">
                <h3 className="text-3xl font-bold  mt-[15px]">{stat.percentage}</h3>
                <p className="text-gray-300 text-lg  ">{stat.label}</p>
            </div>
            <img
                src={stat.icon}
                alt={stat.label}
                style={{
                width: stat.width,
                height: stat.height,
                }}
                className="absolute bottom-0"
            />
            </div>
        ))}
        </div>

      </div>
    </div>
  );
};

export default Status;
