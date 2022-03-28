import React from "react";
import "./heroSection.css";
export const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <img
        src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png"
        alt="hero-img"
        className="hero-image"
      />
      <div className="text-overlay-container">
        <h1 className="overlay-text">
          IT'S TIME TO <span className="explore-text">EXPLORE</span> <br /> THE
          WORLD
        </h1>
        <button className="button explore-btn">Explore Now </button>
      </div>
    </div>
  );
};
