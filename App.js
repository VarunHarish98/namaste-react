import React from "react";
import ReactDOM from "react-dom/client";

//Assignment-1
// const headings = React.createElement(
//   "div",
//   {
//     className: "title",
//   },

//   [
//     React.createElement(
//       "h1",
//       {
//         id: "heading",
//       },
//       "This is h1 heading"
//     ),
//     React.createElement(
//       "h2",
//       {
//         id: "heading",
//       },
//       "This is h2 heading"
//     ),
//     React.createElement(
//       "h3",
//       {
//         id: "heading",
//       },
//       "This is h3 heading"
//     ),
//   ]
// ); //Nested elements
// const root = ReactDOM.createRoot(document.getElementById("root")); //Create root
// root.render(headings);

//Assignment - 2; Using JSX

const HeaderComponent1 = () => <h1>This is h1 header from Functional Component</h1>
const HeaderComponent2 = () => <h2>This is h2 header from Functional Component</h2>
const HeaderComponent3 = () => <h3>This is h3 header from Functional Component</h3>

const attributes = function(a, b) {
  return a + b
}

const HeaderComponentComp = () => (
  <HeaderComponent3 />
)

const attStr = "This is passed from from a variable"

const HeadingComponent = () => (
  <div className="title">
    <h1>This is h1 header from JSX</h1>
    <h2>This is h2 header from JSX</h2>
    <h3>This is h3 header from JSX</h3>
    <HeaderComponent1 />
    <HeaderComponent2 />
    <HeaderComponent3 />
    {attributes(10, 20)} <br/>
    {attStr}
    <HeaderComponentComp />
  </div>  
)

const rootObject = ReactDOM.createRoot(document.getElementById("root")); //Create root
rootObject.render(<HeadingComponent />);
