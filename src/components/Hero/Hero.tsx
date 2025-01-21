import React from "react";
import { heroSection } from "../../lib/data";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      className="m-[30px_25px] h-[789px] rounded-[20px] text-center"
      style={{
        backgroundImage: `url(${heroSection.backgroundImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto">
        <h1 className="text-[60px] font-sub pt-[147px] leading-[60px] font-medium text-[#2E0708]">
          {heroSection.title} 
        </h1>

        <p className="text-[#000000] leading-[20px] text-[18px] mx-auto w-[590px] mt-[18px]">
          {heroSection.description} 
        </p>

        <div className="mt-6 flex justify-center items-center space-x-6">
            {heroSection.ratings.map((rating, index) => (
                <React.Fragment key={index}>
                <div className="flex items-center space-x-2">
                    <img
                    src={rating.icon}
                    alt="rating icon"
                    className="w-[24px] h-[24px]"
                    />
                    <span className="text-xl text-[#16181D]">{rating.rating}</span>
                    <span className="text-[#FEC84B] text-[16px]">{rating.label}</span>
                </div>
                {index !== heroSection.ratings.length - 1 && (
                    <div className="h-[20px] w-[0.5px] bg-[#596173]"></div>
                )}
                </React.Fragment>
            ))}
            </div>
            <Button
            variant="default"
            className="bg-[#EF1515] mt-[24px] p-[10px_12px]  rounded-[7.6px] text-normal text-white hover:bg-[#d40d0d] flex items-center mx-auto space-x-2"
            >
            <img src={heroSection.buttonIcon} alt="Icon" className="" /> 
           
            {heroSection.buttonText}
            </Button>
      </div>
    </section>
  );
};

export default Hero;
