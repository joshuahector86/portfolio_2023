import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, Navbar, WebDev, Footer } from "../Components";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio_2023" element={<Home />} />
          {/* <Route path="/portfolio_2023/video-games" element={<VideoGames />} /> */}
          <Route path="/portfolio_2023/web-dev" element={<WebDev />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
