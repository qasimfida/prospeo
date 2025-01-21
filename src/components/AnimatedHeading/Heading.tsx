import React from "react";
import { headingText } from "../../lib/data";

const Heading: React.FC = () => {
  return (
    <h2 className="text-2xl md:text-3xl mb-[80px] font-semibold text-center relative">
      <span className="relative z-10">{headingText.heading}</span>
      {/* <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 z-0 animate-expand"></span> */}
    </h2>
  );
};

export default Heading;
