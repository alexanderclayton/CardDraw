import React from "react";
import { useLocation } from "react-router-dom";
import { Countdown } from "../components/Countdown";

export const Game: React.FC = () => {
  const location = useLocation();
  const time = location.state;

  console.log(time);

  if (time == undefined) {
    return <p>No Time Limit!</p>;
  }

  return (
    <div>
      <Countdown initialSeconds={time} />
    </div>
  );
};
