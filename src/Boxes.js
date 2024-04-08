import React from "react";

export default function Boxes(props) {
  // const [on, setOn] = React.useState(props.on);

  const styles = {
    backgroundColor: props.on === false ? "black" : "red",
    // color: white,
  };

  return (
    <div
      className="boxChallenge"
      style={styles}
      onClick={() => props.handleBoxClick(props.id)}
    >
      {props.id}
    </div>
  );
}
