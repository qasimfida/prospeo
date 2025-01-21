import React from "react";

type RatingProps = {
  icon: string; // Path to the icon
  rating: string;
  label: string;
};

const Rating: React.FC<RatingProps> = ({ icon, rating, label }) => {
  return (
    <div className="flex items-center">
      <img src={icon} alt={label} className="h-6 w-6" />
      <span className="ml-2 text-gray-700">{rating} {label}</span>
    </div>
  );
};

export default Rating;
