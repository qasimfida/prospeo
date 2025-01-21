import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string; // Custom styles
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
