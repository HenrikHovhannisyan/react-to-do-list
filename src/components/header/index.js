import "./header.css";
import React, { memo, useState } from "react";
import Add from "./add";

const Header = (props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="input-group mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Add list item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="input-group-append">
          <Add
            value={value}
            handler={props.listHandler}
            cleaningValue={() => setValue("")}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Header);
