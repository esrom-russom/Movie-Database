import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../Pages/PageHome";
import PageAbout from "../Pages/PageAbout";
import PageFavorites from "../Pages/PageFavorites";
import PageMovie from "../Pages/PageMovie";
import {GlobalProvider} from "../context/GlobalContext";

function AppRouter() {
  return (
    <BrowserRouter>
    <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/favorites" element={<PageFavorites />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/movie/:id" element={<PageMovie />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}
export default AppRouter;
