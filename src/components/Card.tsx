import React from "react";
import Small from "../assets/cardTypes/small.JPG";
import Medium from "../assets/cardTypes/medium.JPG";
import Large from "../assets/cardTypes/large.JPG";
import Habitat from "../assets/cardTypes/habitat.JPG";
import Detail from "../assets/cardTypes/detail.JPG";

interface CardProps {
  cardType: string;
}

export const Card: React.FC<CardProps> = ({ cardType }) => {
  if (cardType === "small")
    return (
      <img
        src={Small}
        alt="small card back"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "medium")
    return (
      <img
        src={Medium}
        alt="medium card back"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "large")
    return (
      <img
        src={Large}
        alt="large card back"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "habitat")
    return (
      <img
        src={Habitat}
        alt="habitat card back"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "detail")
    return (
      <img
        src={Detail}
        alt="detail card back"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
};
