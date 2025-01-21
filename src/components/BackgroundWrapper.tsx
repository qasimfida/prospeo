// \components\BackgroundWrapper.tsx

import React from 'react';

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <div className="">
      <div className=" w-full absolute bg-no-repeat h-[1000px]" style={{
              backgroundImage: `url('images/pp.png')`, 
              backgroundSize: "cover",
            //   backgroundPosition: "center",
            }}></div> 
      <div className="relative w-[1200px] mt-[200px] mx-auto z-10">
    
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;