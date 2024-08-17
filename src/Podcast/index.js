import "./index.css";
import React from "react";
import mbox from "../Assets/mbox.png";
import soon from "../Assets/soon.jpeg";
import mic from "../Assets/mic.png";
import { FaPlay } from "react-icons/fa";
const Podcast = () => {
  return (
    <>
    
      <div className="podcast">
        <div className="landing-page">
          <h2 className="page-intro">LETS TALK CREATIVITY</h2>
          <div className="dot-top"></div>
          <div className="podcast-name">
            <span className="top-name"> PodCast</span>
            <div className="middle-section">
              <img src={mbox} alt="message box" className="m-box" />
              <span className="top-name"> Cre8ive</span>
            </div>
          </div>
          <div className="dot"></div>
        </div>
        <div className="release-date">
          <div className="container">
            <img src={soon} alt="Coming soon" className="release" />
            <div className="joinText">
              Join the comunity
              {/* <FaPlay /> */}
              <a href='https://drive.google.com/file/d/1chS4XqXGM3N0NGs6pztBFkkoBqdKxkMJ/view?usp=drive_link'><button className="episodes">Episodes</button></a>
              
            </div>
          </div>
          <img src={mic} alt="Mic" className="mic" />
        </div>
      </div>
    </>
  );
};
export default Podcast;