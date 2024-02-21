import { useLocation } from "react-router-dom";
import { CardFlip, Countdown } from "../components";

type TCard = {
  type: string;
  time: number;
};

export const Game = () => {
  const location = useLocation();
  const countdownTime = location.state;

  const cards: TCard[] = [
    { type: "small", time: 1000 },
    { type: "medium", time: 1300 },
    { type: "large", time: 1600 },
    { type: "habitat", time: 1900 },
    { type: "detail", time: 2200 },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {cards.map((card) => (
          <CardFlip type={card.type} time={card.time} />
        ))}
      </div>
      {countdownTime && <Countdown initialSeconds={countdownTime} />}
    </div>
  );
};
