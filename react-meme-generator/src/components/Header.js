import React from "react";
import trollFacePic from "../images/troll-face.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container-left">
          <img alt="troll-face" src={trollFacePic}></img>
          <h1>Meme Generator</h1>
        </div>
        <div className="header-container-right">
          <h3>React Course - Project 3</h3>
        </div>
      </header>
    </>
  );
}
