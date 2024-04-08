import React from "react";

const StarWarsApi = () => {
  const [starWarsData, setStarWarsData] = React.useState();
  const [count, setCount] = React.useState(1);

  console.log("Render function Ran");
  console.log(count);

  function handleCount() {
    setCount((prevCount) => ++prevCount);
  }

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => console.log(data.data.memes));
    // console.log("Effect function ran");
  }, [count]);

  //   console.log(starWarsData);
  return (
    <div>
      {/* <p>{count}</p> */}
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      {/* <p>{starWarsData}</p> */}
      <button onClick={handleCount}>Change character</button>
    </div>
  );
};

export default StarWarsApi;
