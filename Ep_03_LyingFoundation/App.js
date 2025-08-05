import React from "react";
import ReactDOM from "react-dom/client";
/*
//React Element,
const heading = React.createElement("h1", { id: "heading" }, "i am h1 heading");
console.log(heading);

//jsx (this code is transpiled before it reacheds th js engine) -- PARCEL - BEBEL
const jsxheading = <h1 id="heading">i am h1 heading</h1>;

//jsx => Babel transpile it to React.createElement => html 
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(jsxheading);

*/

//components :>components are js function or class which returns a jsx  which describe what should  appread on screen .:reusable scable maintaib stable etc;
// const jsxheading = <h1 id="heading">i am h1 heading</h1>;

const HeadingComponent = () => {
  return (
    <h1 className="heading">
      i am h heading
    </h1>
  );
};
const HeadingComponent1 = () => (
  <h1 className="heading">
    i am h1 heading
  </h1>
);

const HeadingComponent2 = () => (
  <h1 className="heading">
    i am h2 heading
  </h1>
);

const HeadingComponent3 = () => {
  return (
    <div className="container">
      <HeadingComponent2 />
      <h1 className="heading">
        i am h3 heading
      </h1>
    </div>
  );
};
const HeadingComponent4 = () => {
  return (
    <div className="container">
      <HeadingComponent2 />
      <h1 className="heading">
        i am h4 heading
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <HeadingComponent/>
        <HeadingComponent1/>
        <HeadingComponent2/>
        <HeadingComponent3/>
    </div>
);
