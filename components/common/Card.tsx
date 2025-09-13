import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
}

export default function Card({ title, description, imageUrl, buttonLabel }: CardProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
