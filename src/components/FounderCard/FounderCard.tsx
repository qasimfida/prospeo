import React from "react";
import { getFounderCardData } from "../../lib/data";

const FounderCard = () => {
  const card = getFounderCardData();

  return (
    <div
      className="w-[1200px] h-[400px] mt-[100px] mx-auto rounded-[25px] overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${card.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex-1 p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
        <p className="mb-4">{card.description}</p>
        <ul className="list-disc pl-5 mb-4">
          {card.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex space-x-4">
          {card.buttons.map((button, index) => (
            <button key={index} className="bg-red-500 text-white px-4 py-2 rounded">
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 flex py-[20px]  justify-center items-center">
        <img src={card.image} alt="For founders" className="w-[230px] h-[418px] object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default FounderCard; 