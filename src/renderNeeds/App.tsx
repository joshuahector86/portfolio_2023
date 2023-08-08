import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import "./App.scss";
import VideoGames from "../Components/VideoGames/VideoGames";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-games" element={<VideoGames />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
