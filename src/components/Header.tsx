import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/configure">Configure Game</Link>
      <Link to="/howto">How To Play</Link>
    </nav>
  );
};
