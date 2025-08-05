/*const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!"
const root = document.getElementById("root");
root.appendChild(heading);*/


//react 
import React from "react";
import ReactDOM from "react-dom/client"; 

const heading = React.createElement("h1", {}, "Hello React!");
// creating Sibling React Elements Object

/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

/*const child=React.createElement("div",{id:"child"},[
    React.createElement("h1",{key:"1"},"i am an h1 tag"),
    React.createElement("h2",{key:"2"},"i am an h2 tag"),
])

const parent=React.createElement("div",{id:"parent"},child)*/

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{key:"1"},"i am an h1 tag"),
        React.createElement("h2",{key:"2"},"i am an h2 tag")
    ])
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);