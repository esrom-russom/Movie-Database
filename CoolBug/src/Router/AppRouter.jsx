import PageHome from "../Pages/PageHome";
import PageAbout from "../Pages/PageAbout";
import PageFavorites from "../Pages/PageFavorites";
import PageMovie from "../Pages/PageMovie";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/favorites" element={<PageFavorites />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/movie/:id" element={<PageMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
