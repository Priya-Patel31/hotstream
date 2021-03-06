import React from "react";
import "./heroSection.css";
import {useNavigate} from "react-router-dom"
export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section-container">
      <img
        src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png"
        alt="hero-img"
        className="hero-image"
      />
      <div className="overlay-text-container">
        <h1 className="overlay-text">
          IT'S TIME TO <span className="explore-text">EXPLORE</span> <br /> THE
          WORLD
        </h1>
        <button className="button explore-btn" onClick={() =>{navigate("/explore")}}>Explore Now </button>
      </div>
    </div>
  );
};
