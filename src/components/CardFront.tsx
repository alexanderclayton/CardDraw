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
    return (
      <img
        src={SmallFront}
        alt="small card front"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "medium")
    return (
      <img
        src={MediumFront}
        alt="medium card front"
        border-black
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "large")
    return (
      <img
        src={LargeFront}
        alt="large card front"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "habitat")
    return (
      <img
        src={HabitatFront}
        alt="habitat card front"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
  if (cardType === "detail")
    return (
      <img
        src={DetailFront}
        alt="detail card front"
        className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
      />
    );
};
