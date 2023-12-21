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
  let imageSrc;

  switch (cardType) {
    case "small":
      imageSrc = Small;
      break;
    case "medium":
      imageSrc = Medium;
      break;
    case "large":
      imageSrc = Large;
      break;
    case "habitat":
      imageSrc = Habitat;
      break;
    case "detail":
      imageSrc = Detail;
      break;
  }

  return (
    <img
      src={imageSrc}
      alt="card back"
      className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
    />
  );
};
