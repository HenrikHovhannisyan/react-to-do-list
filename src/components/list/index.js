import "./list.css";
import React, { memo } from "react";
import Delete from "./delete";

const List = ({ list, listDelete}) => {
  const listItems = list.map((item, index) => (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={index}
    >
      {index + 1} - {item} <Delete id={index} deleteItem={listDelete} />
    </li>
  ));

  return list && <ul className="list-group">{listItems}</ul>;
};

export default memo(List);
