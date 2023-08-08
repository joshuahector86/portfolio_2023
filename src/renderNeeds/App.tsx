import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import "./App.scss";
import VideoGames from "../Components/VideoGames/VideoGames";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-games" element={<VideoGames />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
