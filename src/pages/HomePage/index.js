import React from "react";

import "./HomePage.scss";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <video autoPlay muted loop id="myVideo">
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/363642443/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=4f9911867fc2006531ba3dd5c7762175bc1fa513df97d7c4ecefc76c1bac9972"
          type="video/mp4"
        />
      </video>

      <div className="event-button" onClick={() => navigate("/product")}>
        <button>Go To Store</button>
      </div>
    </div>
  );
}
