import React from "react";
import "./home.css";
import { HeroSection } from "../home/components/heroSection/HeroSection";
import { Sidebar } from "./components/sidebar/Sidebar";

export const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <HeroSection />
    </div>
  );
};
