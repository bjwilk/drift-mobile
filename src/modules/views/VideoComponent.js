import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drift from "../../assests/drift.mp4";

function VideoComponent() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Play the video on component mount
    videoRef.current.play();
  }, []);

  const navigateToHome = () => {
    // Navigate to the home page
    navigate("/*");
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted loop playsInline id="myVideo">
        <source src={Drift} type="video/mp4" />
      </video>

      <button onClick={navigateToHome}>Enter</button>
    </div>
  );
}

export default VideoComponent;
