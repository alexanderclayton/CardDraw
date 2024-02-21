import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, CardFront } from ".";

interface CardFlipProps {
  type: string;
  time: number;
}

export const CardFlip = ({ type, time }: CardFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, time);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div key={type}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card type={type} />
        <CardFront type={type} />
      </ReactCardFlip>
    </div>
  );
};
