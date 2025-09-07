import React from "react";
import { CardProps } from "@/interfaces";
import Button from "./Button";

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 max-w-sm">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <Button label="View Details" onClick={() => alert(title)} />
    </div>
  );
};

export default Card;
