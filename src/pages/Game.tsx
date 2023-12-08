import React from "react";
import { Countdown } from "../components/Countdown";

export const Game: React.FC = () => {
  return (
    <div>
      <Countdown initialSeconds={3} />
    </div>
  );
};
