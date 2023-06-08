import React from "react";
import ReactDOM from "react-dom/client";

//Assignment-1
const headings = React.createElement(
  "div",
  {
    className: "title",
  },

  [
    React.createElement(
      "h1",
      {
        id: "heading",
      },
      "This is h1 heading"
    ),
    React.createElement(
      "h2",
      {
        id: "heading",
      },
      "This is h2 heading"
    ),
    React.createElement(
      "h3",
      {
        id: "heading",
      },
      "This is h3 heading"
    ),
  ]
); //Nested elements
const root = ReactDOM.createRoot(document.getElementById("root")); //Create root
root.render(headings);

//Assignment - 2; Using JSX
