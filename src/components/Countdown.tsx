import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialSeconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  if (seconds <= 0) {
    return (
      <div className="flex justify-center">
        <p className="text-7xl">Time's Up!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <p className={seconds > 10 ? "text-7xl" : "text-7xl text-red-600"}>
        {formatTime(seconds)}
      </p>
    </div>
  );
};
