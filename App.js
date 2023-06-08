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
// const headings = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   [React.createElement(
//     "div",
//     {
//       id: "child",
//     },
//     [React.createElement(
//       "h1",
//       {
//         id: "heading",
//       },
//       "This is h1 heading"
//     ), 
//     React.createElement(
//         "h2",
//         {
//           id: "heading",
//         },
//         "This is h2 heading"
//       )]
//   ), React.createElement(
//     "div",
//     {
//       id: "child",
//     },
//     [React.createElement(
//       "h1",
//       {
//         id: "heading",
//       },
//       "This is h1 heading"
//     ), 
//     React.createElement(
//         "h2",
//         {
//           id: "heading",
//         },
//         "This is h2 heading"
//       )]
//   )]
// ); //Nested elements 
// const root = ReactDOM.createRoot(document.getElementById("root")); //Create root
// root.render(headings); 

// React Element using JSX
const jsxHeading = (<h1 id='heading' className="head">
  Namaste React using JSX
  </h1>) //React Element - Returns Object
//Multiple line JSX needs to wrapped inside () if single line not required.

//React functional component - JS Component - Function which returns React/JSX element
//Components should start with CAPITAL letter


const TitleComponent = () => (
  <h1>This is Second Component</h1>
)

const titleElementChild = <h3>This is titleElementChild</h3>

const titleElement = (
  <h3>
    {titleElementChild}
    This is element
  </h3>
)
const num = 100

const HeadingComponent = () => (
  // Works without return also!
  <React.Fragment>
    {/* Else <> */}
    <div id="container">
      {num}
      <br />
      {250 + 350}
      {titleElement}
      {TitleComponent()}
      {/* It can be used as <TitleComponent/> also!!! */}
      <h1>Namaste React Functional Component</h1>
    </div>
    <div>
      <h1>
        This is second parent element, rendering possbile due to React Fragments with empty tag
      </h1>
    </div>
  </React.Fragment>
  // Else </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(< HeadingComponent />)
 