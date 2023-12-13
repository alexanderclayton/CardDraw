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
    return <img src={Small} alt="" className="w-36 h-48 object-cover" />;
  if (cardType === "medium")
    return <img src={Medium} alt="" className="w-36 h-48 object-cover" />;
  if (cardType === "large")
    return <img src={Large} alt="" className="w-36 h-48 object-cover" />;
  if (cardType === "habitat")
    return <img src={Habitat} alt="" className="w-36 h-48 object-cover" />;
  if (cardType === "detail")
    return <img src={Detail} alt="" className="w-36 h-48 object-cover" />;
};
