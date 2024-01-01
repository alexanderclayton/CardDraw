import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/creatureslogo.jpg";
import { Header } from "../components/Header";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const toGame = (time: number | null) => {
    navigate("/game", { state: time });
  };

  return (
    <div>
      <div className="bg-green-600 transform -rotate-12 origin-top-left pt-12 pl-12 ml-[-4vh] pb-3">
        <Header />
      </div>
      <div className="h-screen px-12 pt-12">
        <div className="flex justify-center h-[60%]">
          <img src={Logo} alt="creature with a message" />
        </div>
        <div className="h-[40%]">
          <p className="flex justify-center font-Caveat text-2xl">
            Select Game Mode:
          </p>
          <div className="flex justify-around pt-8">
            <div
              className="bg-blue-600 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-blue-800 border-2 border-black font-Caveat"
              onClick={() => toGame(300)}
            >
              <p className="font-bold text-3xl">5 Minutes</p>
            </div>
            <div
              className="bg-yellow-400 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-yellow-600 border-2 border-black font-Caveat"
              onClick={() => toGame(900)}
            >
              <p className="font-bold text-3xl">15 Minutes</p>
            </div>
            <div
              className="bg-red-500 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-red-700 border-2 border-black font-Caveat"
              onClick={() => toGame(null)}
            >
              <p className="font-bold text-3xl">Open Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
