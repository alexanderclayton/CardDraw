//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigureGame, Game, Home, HowTo } from "./pages";

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
