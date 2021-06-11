import React from "react";
import ReactDOM from "react-dom";
var fname = "Galien";
var lname = "Muhindo";
var luckyNumber = 13;
ReactDOM.render(
  <div>
    <h1>Hello {fname } {lname}</h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,

  document.getElementById("root")
);
