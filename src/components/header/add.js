import "./header.css";
import React from "react";

const Add = ({ value, handler, cleaningValue }) => {
  return (
    <button
      className="btn btn-outline-success"
      type="button"
      onClick={() => {
        handler(value);
        cleaningValue();
      }}
    >
      Add
    </button>
  );
};

export default Add;
