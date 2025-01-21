// \components\MeetCompanies.tsx

import React from 'react';

const MeetCompanies: React.FC = () => {
  return (
    <div className=" mx-auto ">
      <h2 className="text-4xl  w-[796px] mb-8">
        Meet the companies generating more revenues with <span className="text-red-500">Prospeo</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-[16px]">
          <p className="mb-4">Oracle leverages Prospeo to uncover high-quality contact data, leading to great opportunities in AI</p>
          <a href="#" className="text-black underline">Read the story →</a>
          <div className="mt-4">
            <img src="/icons/Oracle.svg" alt="Oracle" className="h-6" />
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-[16px]">
          <p className="mb-4">Webflow leverages Prospeo to uncover high-quality contact data, leading to great opportunities in AI</p>
          <a href="#" className="text-black underline">Read the story →</a>
          <div className="mt-4">
            <img src="/icons/webflow.svg" alt="Webflow" className="h-8" />
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-[16px]">
          <p className="mb-4">Oracle leverages Prospeo to uncover high-quality contact data, leading to great opportunities in AI</p>
          <a href="#" className="text-black underline">Read the story →</a>
          <div className="mt-4">
            <img src="/icons/Oracle.svg" alt="Oracle" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCompanies;