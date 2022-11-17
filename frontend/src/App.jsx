// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./components/SearchComponents/SearchPage/SearchPage";
import VideoPlayer from "./components/VideosSection/VideoPlayer/VideoPlayer";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/VideoPlayer" element={<VideoPlayer />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
