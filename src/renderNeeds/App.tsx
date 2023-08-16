import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, Navbar, VideoGames, WebDev, Footer } from "../Components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-games" element={<VideoGames />} />
          <Route path="/web-dev" element={<WebDev />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
