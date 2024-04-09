import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import MainContent from "./MainContent";

import "./style.css";

function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
