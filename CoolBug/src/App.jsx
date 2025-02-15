import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./Pages/PageHome";
import PageMovie from "./Pages/PageMovie";
import PageFavorites from "./Pages/PageFavorites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/movie/:id" element={<PageMovie />} />
        <Route path="/favorites" element={<PageFavorites />} />
      </Routes>
    </Router>
  );
}

export default App;
