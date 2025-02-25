import React, { useState, useEffect } from "react";
import "../App.css";

const CanvaEmbed = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Update screen size when the window is resized
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to return the appropriate Canva link based on screen size
  const getCanva = () => {
    if (screenSize <= 768) {
      return (
        <div className="canva-header2" id="home">
          <iframe 
            loading="lazy"
            className="embed-iframe"
            src="https://www.canva.com/design/DAGf1eJ89X4/G7t-CT05oqUvLXTBUbEzqg/view?embed"
            allowFullScreen="allowFullScreen"
          allow="fullscreen"
          ></iframe>
        </div>
      )  // Small screen
    } else {
      return (
        <div className="canva-header">
          <iframe
          loading="lazy"
          className="embed-iframe"
          src="https://www.canva.com/design/DAGf1Nb-42c/kvHPr2N98Gd7fmGGaO99lw/view?embed"
          allowFullScreen="allowFullScreen"
          allow="fullscreen"
          ></iframe>
        </div>
      )  // Large screen
    }
  };


  
  return (
    <div className="canva-wrapper">
      {getCanva()}
    </div>
  );
};

export default CanvaEmbed;
