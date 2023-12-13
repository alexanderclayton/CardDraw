import React from "react";
import Small from "../assets/cardTypes/small.jpg";
import Medium from "../assets/cardTypes/medium.jpg";
import Large from "../assets/cardTypes/large.jpg";
import Habitat from "../assets/cardTypes/habitat.jpg";
import Detail from "../assets/cardTypes/detail.jpg";

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
