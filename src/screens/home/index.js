import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../feed";
import Player from "../player";
import Library from "../library";
import Trending from "../trending";
import Favorites from "../favorites";
import "./home.css";
import Sidebar from "../../components/sidebar";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

// nhiều thiết lập màn hình (settingScreen)
