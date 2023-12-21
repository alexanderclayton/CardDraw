//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { ConfigureGame } from "./pages/ConfigureGame";
import { HowTo } from "./pages/HowTo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/configure" element={<ConfigureGame />} />
        <Route path="/howto" element={<HowTo />} />
      </Routes>
    </Router>
  );
}

export default App;
