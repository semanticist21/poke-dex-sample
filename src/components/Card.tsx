import { Color } from "../data/types";
import React from "react";

export interface CardProps {
  title: string;
  desc:string;
  bgColor?: Color;
  nameColor?: Color;
  listingColor?: Color;
  index: number;
}

const Card: React.FC<CardProps> = ({title, desc}) => {
    const base = "";

  return <div className="w-[85rem] h-28 rounded-[0.75rem] px-8 py-5 overflow-hidden shadow-lg #ffffff">
    <div className="flex flex-col items-start max-w-sm bg-red-500 overflow-visible">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{desc}</p>
        <p className="text-gray-700 text-base">{desc}</p>
        <p className="text-gray-700 text-base">{desc}</p>
        <p className="text-gray-700 text-base">{desc}</p>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* You can add additional content like tags or buttons here */}
      </div>
  </div>;
};

export default Card;
