import React from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://i.pinimg.com/280x280_RS/c2/9e/ce/c29ece1ba69926307faf7e7a0ed1d9a7.jpg"
        className="profile-img"
        alt="profile"
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icons={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icons={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icons={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icons={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icons={<IoLibrary />} />
      </div>
      <SidebarButton title="Sing out" to="" icons={<FaSignOutAlt />} />
    </div>
  );
}
