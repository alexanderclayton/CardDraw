//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { ConfigureGame } from "./pages/ConfigureGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/configure" element={<ConfigureGame />} />
      </Routes>
    </Router>
  );
}

export default App;
