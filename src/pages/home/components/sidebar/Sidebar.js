import React from "react";
import {
  FaHome,
  MdExplore,
  BsSearch,
  AiFillLike,
  AiOutlineHistory,
} from "../../../../assets/icons";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <ul className="sidebar-items  list-style-none">
      <li className="sidebar-item active">
        <FaHome className="mr-1 sidebar-item-icon" />
        Home
      </li>
      <li className="sidebar-item">
        <MdExplore className="mr-1 sidebar-item-icon" />
        Explore
      </li>
      <li className="sidebar-item">
        <BsSearch className="mr-1 sidebar-item-icon" />
        Search
      </li>
      <li className="sidebar-item">
        <AiFillLike className="mr-1 sidebar-item-icon" />
        Like
      </li>
      <li className="sidebar-item">
        <AiOutlineHistory className="mr-1 sidebar-item-icon" />
        History
      </li>
    </ul>
  );
};
