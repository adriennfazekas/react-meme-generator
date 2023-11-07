import React from "react";
import dataMemes from "../memesData.js";

export default function Meme() {
  function handleClick() {
    const randomMeme =
      dataMemes.data.memes[
        Math.floor(Math.random() * dataMemes.data.memes.length)
      ];
    console.log(randomMeme.url);
  }
  return (
    <>
      <div className="form-container">
        <form>
          <div>
            <input placeholder="Top text"></input>
            <input placeholder="Bottom text"></input>
          </div>
          <button type="button" onClick={handleClick} className="form-btn">
            Get a new meme image
          </button>
        </form>
      </div>
    </>
  );
}
