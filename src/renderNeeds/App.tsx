import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, Navbar, VideoGames, WebDev, Footer } from "../Components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/portfolio_2023" element={<Home />} />
          <Route path="/portfolio_2023/video-games" element={<VideoGames />} />
          <Route path="/portfolio_2023/web-dev" element={<WebDev />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;