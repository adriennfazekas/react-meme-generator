import React, { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setRandomMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => setAllMeme(data.data.memes))
    );
  }, []);

  function getMemeImage() {
    const randomMeme = allMeme[Math.floor(Math.random() * allMeme.length)];
    setRandomMeme((prev) => ({
      ...prev,
      randomImage: randomMeme.url,
    }));
  }

  function handleClick() {
    getMemeImage();
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setRandomMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="form-container">
        <form>
          <div>
            <input
              placeholder="Top text"
              onChange={handleChange}
              name="topText"
              value={meme.topText}
            ></input>
            <input
              placeholder="Bottom text"
              onChange={handleChange}
              name="bottomText"
              value={meme.bottomText}
            ></input>
          </div>
          <button type="button" onClick={handleClick} className="form-btn">
            Get a new meme image
          </button>
        </form>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="random meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
