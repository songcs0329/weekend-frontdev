import ReactDOM from "react-dom";
import React from "react";
import App from "./App"

const h1 = React.createElement(
    "h1", {
        style: {
            color: "red"
        },
        className: "blue"
    },
    "HELLO WORLD"
)

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)