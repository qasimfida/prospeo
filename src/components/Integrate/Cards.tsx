import React from "react";
import { cardData } from "../../lib/data";

const Card = () => {
  const cardOne = cardData.find((card) => card.id === 1);
  const cardTwo = cardData.find((card) => card.id === 2);
  const cardThree = cardData.find((card) => card.id === 3);

  return (
    <section className="relative">
      <div className="flex justify-center" >
        {/* First Card (Card 1) */}
        <div
          className="relative p-[30px_36px] bg-[#FFFBF3]  rounded-[25px] shadow-lg flex flex-col"
          style={{
            backgroundImage: `url(${cardOne.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition:"bg-top",
          }}
        >
          <div className="flex flex-col">
            <h3 className="text-[25px] font-medium text-center ">{cardOne.title}</h3>
          <div className="ml-[30px]">
          <img
              src={cardOne.icons[0]}
              alt="Main Icon"
              className="w-[80px]  rounded-[24px] mt-[49px] "
            />
          </div>
          </div>
          <div className="flex  mt-[49px] justify-around">
            {cardOne.icons.slice(1,4).map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Icon ${index + 1}`}
                className="object-none w-[100px] h-[100px] mt-[5px]"
              />
            ))}
          </div>
          <div className="flex flex-row gap-[5px] justify-center">
            {cardOne.icons.slice(4,6).map((icon, index) => (
              <img
             className="object-none w-[100px] h-[100px]"
                key={index}
                src={icon}
                alt={`Icon ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Second Card (Card 2) */}
        <div className="relative  rounded-[25px] flex   shadow-lg "
         style={{
          backgroundImage: `url(${cardTwo.backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:"bg-top",
        }}
        >
          {/* <div className="absolute inset-0">
            <img
              src={cardTwo.backgroundImage}
              alt="Card 2 Background"
              className="w-[810px] h-full object-cover"
            />
          </div> */}
          <div className="relative text-center z-10 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{cardTwo.title}</h3>
            <img
              src={cardTwo.overlayImage}
              alt="Overlay Image"
              className="object-contain max-h-full ml-[58px] mt-[35px]"
            />
          </div>
        </div>
      </div>

      {/* Third Card (Card 3) - New Row */}
      <div className="mt-2 flex justify-center">
        <div
          className="w-full h-[245px] rounded-[25px] overflow-hidden flex items-center p-[0] m-[0]"
          style={{
            backgroundImage: `url('/images/card2bg.png')`,
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }}
        >
          <div className="flex-1 mt-[15px]  pl-[40px] py-[42px]">
            <h3 className="text-[50px] font-medium w-[450px] text-gray-800 leading-[50px] mb-4">{cardThree.title}</h3>
            
            <div className="flex space-x-4">
              <button className="bg-[#EF1515] rounded-[7.6px] text-[18px] text-white hover:bg-[#d40d0d]  px-4 py-2 rounded">Get started for free</button>
              <button className="border border-[#2E0708] rounded-[7.6px] text-[18px]  px-4 py-2 ">Contact Sales Team</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center space-x-4">
            {cardThree.badges.map((badge, index) => (
              <div key={index} className="text-center">
                <img src={badge.image} alt="badge" className="w-[100px] h-[100px] object-contain" />
                <div className="text-sm">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;