import React from "react";
import "./Hotel.css";

function Hotel(props) {
  return (
    <div className="container">
      <div className="row my-3 py-6 py-sm-2">{props.children}</div>
    </div>
  );
}

export default Hotel;
