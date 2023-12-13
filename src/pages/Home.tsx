import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/creatureslogo.jpg";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const toGame = (time: number | null) => {
    navigate("/game", { state: time });
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center h-[60%]">
        <img src={Logo} alt="creature with a message" />
      </div>
      <div className="h-[40%]">
        <p className="flex justify-center">Select Game Mode:</p>
        <div className="flex justify-around pt-8">
          <div
            className="bg-red-500 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-red-700"
            onClick={() => toGame(300)}
          >
            <p className="font-bold text-3xl">5 Minutes</p>
          </div>
          <div
            className="bg-red-500 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-red-700"
            onClick={() => toGame(900)}
          >
            <p className="font-bold text-3xl">15 Minutes</p>
          </div>
          <div
            className="bg-red-500 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-red-700"
            onClick={() => toGame(null)}
          >
            <p className="font-bold text-3xl">Open Play</p>
          </div>
        </div>
      </div>
    </div>
  );
};
