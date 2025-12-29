const heading = React.createElement(
  "h1",
  { id: "heading", xyc: "abc" },
  "hello world from react inside !!.."
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
