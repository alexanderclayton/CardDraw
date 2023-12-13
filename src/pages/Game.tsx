import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { useLocation } from "react-router-dom";
import { Countdown } from "../components/Countdown";
import { Card } from "../components/Card";
import { CardFront } from "../components/CardFront";

export const Game: React.FC = () => {
  const location = useLocation();
  const time = location.state;
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (time == undefined) {
    return <p>No Time Limit!</p>;
  }

  const cardTypes = ["small", "medium", "large", "habitat", "detail"];

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {cardTypes.map((type) => (
          <div key={type}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <Card cardType={type} />
              <CardFront cardType={type} />
            </ReactCardFlip>
          </div>
        ))}
      </div>
      <Countdown initialSeconds={time} />
    </div>
  );
};
