import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import MainContent from "./MainContent";
import FavIcon from "./FavIcon";
import boxData from "./boxData";
import Boxes from "./Boxes";
import JokeData from "./JokeData";
import Joke from "./Joke";
import StarWarsApi from "./StarWarsApi";
import WindowTracker from "./WindowTracker";

import "./style.css";

function App() {
  const [show, setShow] = React.useState(false);

  const [messages, setMessages] = React.useState([]);
  const [jokes, setJokes] = React.useState(JokeData);

  const jokes1 = jokes.map(function (currJoke) {
    return <Joke setup={currJoke.setup} punchline={currJoke.punchline} />;
  });

  // const [myArr, setMyArr] = React.useState(["Thing 1", "Thing 2", "Thing 3"]);

  // console.log(myArr);

  // function addItem() {
  //   setMyArr(function (oldArr) {
  //     const newItem = `Thing ${myArr.length + 1}`;

  //     oldArr.push(newItem);
  //     console.log(oldArr);
  //     return [...oldArr];
  //   });
  // }

  // const myArr1 = myArr.map((curr) => {
  //   return <p>{curr}</p>;
  // });

  const [allBoxData, setAllBoxData] = React.useState(boxData);

  // function handleBoxClick(id) {
  //   setAllBoxData(function (oldAllBoxData) {
  //     const newAllBoxData = [];
  //     for (let i = 0; i < oldAllBoxData.length; i++) {
  //       const oldBox = oldAllBoxData[i];
  //       if (oldBox.id === id) {
  //         const newBox = { ...oldBox, on: !oldBox.on };
  //         newAllBoxData.push(newBox);
  //       }
  //     }
  //     return newAllBoxData;
  //   });
  // }

  function handleBoxClick(id) {
    setAllBoxData(function (oldAllBoxData) {
      return oldAllBoxData.map(function (oldBox) {
        return oldBox.id === id ? { ...oldBox, on: !oldBox.on } : oldBox;
      });
    });
  }

  const boxes = allBoxData.map(function (currBox) {
    return (
      <Boxes
        id={currBox.id}
        currBox={currBox}
        setAllBoxData={setAllBoxData}
        on={currBox.on}
        handleBoxClick={handleBoxClick}
      />
    );
  });

  const [contact, setContact] = React.useState({
    firstName: "Raghavi",
    lastName: "Singh",
    phone: "8373839383",
    email: "thisanemail@email.com",
    isFavorite: true,
  });

  function forFavorite() {
    setContact(function (currContact) {
      return {
        ...currContact,
        isFavorite: !currContact.isFavorite,
      };
    });
  }

  function handleWindowTrackerClick() {
    setShow((prevShow) => !prevShow);
    console.log(show);
  }
  return (
    <>
      <div>
        <button onClick={handleWindowTrackerClick}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </div>
      <div>
        {messages.length > 0
          ? `You have ${messages.length} unread messages`
          : "You are all caught up"}
      </div>
      {jokes1}
      {boxes}
      <div className="article">
        <img
          className="con-img"
          src="./images/contact-profile.webp"
          alt=""
        ></img>

        <FavIcon isFilled={contact.isFavorite} imgChange={forFavorite} />

        <h2 className="phone">
          <span>{contact.firstName}</span> <span>{contact.lastName}</span>
        </h2>

        <h3 className="email">{contact.email}</h3>
      </div>

      {/* <button onClick={addItem}>Add Item</button>
      {myArr1} */}

      <Header />
      <MainContent />
      {/* <StarWarsApi /> */}
    </>
  );
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
