import React from "react";

export default function MainContent() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/2xscjb.png",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
  }

  function changeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: url,
      };
    });
  }

  return (
    <div className="main-content-sec">
      <div className="text-sec-main">
        <div className="text-sec">
          <p className="text">Top Text</p>
          <input
            type="name"
            name="topText"
            onChange={handleChange}
            placeholder="Top text"
            className="input"
            value={FormData.topText}
          ></input>
        </div>
        <div className="text-sec">
          <p className="text">Bottom Text</p>
          <input
            type="name"
            name="bottomText"
            onChange={handleChange}
            placeholder="Bottom text"
            className="input"
            value={FormData.bottomText}
          ></input>
        </div>
      </div>

      <button className="meme-btn" onClick={changeImage}>
        Get a new meme image 🖼
      </button>

      <div className="memeImgDiv">
        <img className="memeImg" alt="" src={meme.randomImg}></img>

        <div className="top-text-div">
          <p className="top-text">{meme.topText}</p>
        </div>

        <div className="bottom-text-div">
          <p className="bottom-text">{meme.bottomText}</p>
        </div>
      </div>
    </div>
  );
}
