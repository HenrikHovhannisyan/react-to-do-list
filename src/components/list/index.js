import "./list.css";
import React from "react";
import Delete from "./delete";

const List = ({ list }) => {
  const listItems = list.map((item, index) => (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={index}
    >
      {index + 1} - {item} <Delete id={index} />
    </li>
  ));

  return <>{list && <ul className="list-group">{listItems}</ul>}</>;
};

export default List;
