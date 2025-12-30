import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = React.createElement(
  "h1",
  { id: "headingID" },
  "this is react heading 🚀"
);

// jsx
const jsxHeading = <h1 id="heading">this is react heading 🚀 usng jsx</h1>;

// functional component
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>this is inside component jsx</h1>
    </div>
  );
};

// component composition
const HeadingComponent2 = () => (
  <div className="container">
    <HeadingComponent />
    <h1>this is inside component jsx HeadingComponent2</h1>
  </div>
);

/**
 * ? Remember that retuen always comes with {} brackets in component syntax
* * components can also be written as below

const HeadingComponent2 = () => (
  <div className="container">
    <h1>this is inside component jsx</h1>
  </div>
);
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * *for rendering a react element
 root.render(jsxHeading);
 */

// for rendering a funcitonal component
root.render(<HeadingComponent2 />);
