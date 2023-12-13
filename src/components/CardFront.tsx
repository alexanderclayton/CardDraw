import React from "react";
import SmallFront from "../assets/cardTypes/smallFront.JPG";
import MediumFront from "../assets/cardTypes/mediumFront.JPG";
import LargeFront from "../assets/cardTypes/largeFront.JPG";
import HabitatFront from "../assets/cardTypes/habitatFront.JPG";
import DetailFront from "../assets/cardTypes/detailFront.JPG";

interface CardFrontProps {
  cardType: string;
}

export const CardFront: React.FC<CardFrontProps> = ({ cardType }) => {
  if (cardType === "small")
  return <img src={SmallFront} alt="" className="w-36 h-48 object-cover" />;
if (cardType === "medium")
  return <img src={MediumFront} alt="" className="w-36 h-48 object-cover" />;
if (cardType === "large")
  return <img src={LargeFront} alt="" className="w-36 h-48 object-cover" />;
if (cardType === "habitat")
  return <img src={HabitatFront} alt="" className="w-36 h-48 object-cover" />;
if (cardType === "detail")
  return <img src={DetailFront} alt="" className="w-36 h-48 object-cover" />;
};
