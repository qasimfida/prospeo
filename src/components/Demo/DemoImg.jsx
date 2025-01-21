import React from "react";
import { ImgPath } from "../../lib/data";

const DemoImg = () => {
  return (
    <div className="relative w-full mx-auto h-auto flex justify-center items-center ">
      <img
        src={ImgPath}
        alt="Main Display"
        className="absolute top-[-350px] w-auto h-auto shadow-lg rounded-lg"
      />
    </div>
  );
};

export default DemoImg;
