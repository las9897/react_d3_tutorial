import React from "react";
import ReactDOM from "react-dom";
import SVG from "./SVG";
import CurvedLine from "./CurvedLine";

ReactDOM.render(
      <React.StrictMode>
            {/* <App /> */}
            <SVG />
            <CurvedLine />
      </React.StrictMode>,
      document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
