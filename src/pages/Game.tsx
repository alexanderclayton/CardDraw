import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useLocation } from "react-router-dom";
import { Countdown } from "../components/Countdown";
import { Card } from "../components/Card";
import { CardFront } from "../components/CardFront";

export const Game: React.FC = () => {
  const location = useLocation();
  const time = location.state;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  if (time == undefined) {
    return <p>No Time Limit!</p>;
  }

  return (
    <div>
      <div className="flex justify-around">
        <div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card cardType="small" />
            <CardFront cardType="small" />
          </ReactCardFlip>
          <button onClick={handleClick}>Click to flip</button>
        </div>
        <div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card cardType="medium" />
            <CardFront cardType="medium" />
          </ReactCardFlip>
        </div>
        <div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card cardType="large" />
            <CardFront cardType="large" />
          </ReactCardFlip>
        </div>
        <div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card cardType="habitat" />
            <CardFront cardType="habitat" />
          </ReactCardFlip>
        </div>
        <div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card cardType="detail" />
            <CardFront cardType="detail" />
          </ReactCardFlip>
        </div>
      </div>
      <Countdown initialSeconds={time} />
    </div>
  );
};
