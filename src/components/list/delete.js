import "./list.css";
import React from "react";

const Delete = ({ id, deleteItem }) => {
  return (
    <button className="btn badge bg-danger" onClick={() => deleteItem(id)}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default Delete;
