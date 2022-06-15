import "./list.css";
import React from "react";

const Delete = ({id}) => {
  return (
    <button className="btn badge bg-danger">
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default Delete;
