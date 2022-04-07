import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  MdExplore,
  BsCollectionPlayFill,
  BsBookmarkFill,
  AiFillLike,
  AiOutlineHistory,
} from "../../../../assets/icons";
import "./sidebar.css";

export const Sidebar = () => {
  const getClassName = (state) => {
    return state.isActive ? "sidebar-item active" : "sidebar-item";
  };
  return (
    <ul className="sidebar-items  list-style-none">
      <NavLink to="/" className={getClassName}>
        <FaHome className="mr-1 sidebar-item-icon" />
        <span className="sidebar-content">Home</span>
      </NavLink>
      <NavLink to="/explore" className={getClassName}>
        <MdExplore className="mr-1 sidebar-item-icon" />
        <span className="sidebar-content">Explore</span>
      </NavLink>
      <NavLink to="/playlists" className={getClassName}>
        <BsCollectionPlayFill className="mr-1 sidebar-item-icon" />
        <span className="sidebar-content">Playlists</span>
      </NavLink>
      <NavLink to="/likes" className={getClassName}>
        <AiFillLike className="mr-1 sidebar-item-icon" />
        <span className="sidebar-content">Likes</span>
      </NavLink>
      <NavLink to="/watchlater" className={getClassName}>
        <BsBookmarkFill className="mr-1 sidebar-item-icon" />
        <span className="sidebar-content">Watch Later</span>
      </NavLink>
      <NavLink to="/history" className={getClassName}>
        <AiOutlineHistory className="mr-1 sidebar-item-icon" />
        <span className="sidebar-content">History</span>
      </NavLink>
    </ul>
  );
};
