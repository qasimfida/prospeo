"use client";

import React, { useState, useEffect } from 'react';

const CollaborationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Delay the rendering logic until after the client has mounted
  useEffect(() => {
    setActiveTab('prospect');  // Default tab is 'prospect'
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'prospect':
        return (
          <div>
            <p>Prospect information content goes here.</p>
          </div>
        );
      case 'searches':
        return (
          <div>
            <p>Export searches content goes here.</p>
          </div>
        );
      case 'lists':
        return (
          <div>
            <p>Create lists content goes here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (activeTab === null) {
    return null; // Avoid rendering the component before the client is mounted
  }

  return (
    <div className="mt-[100px] mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Collaborate with your team</h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Card 1 */}
        <div className="flex-1 bg-black text-white p-6 rounded-lg shadow-lg" style={{ backgroundImage: "url('/icons/bgbgbg.svg')" }}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <img src="/images/iconsdp.png" alt="Avatar" className="w-8 h-8 rounded-full" />
            </div>
            <div className="bg-red-500 p-2 rounded">
              <img src="/images/icon.png" alt="Icon" className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Collaborate</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
          <div className="flex justify-between items-center">
            <span className="bg-gray-700 p-2 rounded-full">Vic</span>
            <span className="bg-gray-700 p-2 rounded-full">Timothy</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-black text-white p-6 rounded-lg shadow-lg" style={{ backgroundImage: "url('/images/extension-bg.png')" }}>
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded ${activeTab === 'prospect' ? 'bg-red-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('prospect')}
            >
              Find prospect information
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'searches' ? 'bg-red-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('searches')}
            >
              Export searches
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'lists' ? 'bg-red-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('lists')}
            >
              Create lists
            </button>
          </div>
          <div className="bg-white text-black p-4 rounded-lg">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="mt-8 bg-black text-white p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: "url('/images/footer-bg.png')" }}>
        <h3 className="text-lg font-bold mb-2">You are a click away from growth</h3>
        <div className="flex justify-center space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Get started for free</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">Contact sales</button>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
