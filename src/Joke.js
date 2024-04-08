import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  function handleClick() {
    setIsShown(function (curr) {
      return !curr;
    });
  }

  const word = isShown ? "Hide" : "Show";
  return (
    <div>
      <h3>{props.setup}</h3>
      {isShown && <h4>{props.punchline}</h4>}
      <button onClick={handleClick}>{word} punchline</button>
    </div>
  );
}
