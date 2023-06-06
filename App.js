// const heading = React.createElement("h1", {
//     id: "heading",
//     abc: "xyz"
// }, "Hello World from React!!!"); //Step 1 - Create an element
// const root = ReactDOM.createRoot(document.getElementById("root")); //Step 2 - Create a root in which element needs to be rendered
// root.render(heading); //Step 3 - Render the elements in the root

//Creating for nested elements for structure
/**
 * <div>
 *      <div>
 *             <h1> This is h1 heading </h1>
 *              <h1> This is h1 heading </h1>
 *      </div>
 *       <div>
 *             <h1> This is h1 heading </h1>
 *              <h1> This is h1 heading </h1>
 *      </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";
const headings = React.createElement(
  "div",
  {
    id: "parent",
  },
  [React.createElement(
    "div",
    {
      id: "child",
    },
    [React.createElement(
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
      )]
  ), React.createElement(
    "div",
    {
      id: "child",
    },
    [React.createElement(
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
      )]
  )]
); //Nested elements 
const root = ReactDOM.createRoot(document.getElementById("root")); //Create root
root.render(headings); 