import React from "react";

export default function FavIcon(props) {
  let favIcon =
    props.isFilled === true
      ? "./images/fav-filled.png"
      : "./images/fav-not-filled.png";

  return (
    <img className="fav-icon" src={favIcon} onClick={props.imgChange}></img>
  );
}
