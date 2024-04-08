import React from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidh() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidh);
    console.log("setting up");
    return function () {
      console.log("cleaning up");
      window.removeEventListener("resize", watchWidh);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default WindowTracker;
