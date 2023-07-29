import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({ color: isActive ? "red" : "" });
  return (
    <nav>
      <NavLink to={"/"} style={getActiveStyle}>
        Home
      </NavLink>
      <NavLink to={"/explore"} style={getActiveStyle}>
        Explore
      </NavLink>
      <NavLink to={"/playlists"} style={getActiveStyle}>
        Playlists
      </NavLink>
      <NavLink to={"/watchlater"} style={getActiveStyle}>
        Watch Later
      </NavLink>
    </nav>
  );
};

export default Navbar;
