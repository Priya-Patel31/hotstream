import React from "react";
import "./home.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Outlet } from "react-router";

export const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Outlet/>
    </div>
  );
};
