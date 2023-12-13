import React from "react";
import { useLocation } from "react-router-dom";
import { Countdown } from "../components/Countdown";
import { Card } from "../components/Card";

export const Game: React.FC = () => {
  const location = useLocation();
  const time = location.state;

  console.log(time);

  if (time == undefined) {
    return <p>No Time Limit!</p>;
  }

  return (
    <div>
      <div className="flex justify-around">
        <Card cardType={"small"} />
        <Card cardType={"medium"} />
        <Card cardType={"large"} />
        <Card cardType={"habitat"} />
        <Card cardType={"detail"} />
      </div>
      <Countdown initialSeconds={time} />
    </div>
  );
};
