import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/header";
import List from "./components/list";

const App = () => {
  const [list, setList] = useState([]);

  const addListItem = useCallback((item) => item.trim() && setList((list) => [...list, item]), [list])
  const removeListItem = useMemo(() => (element) => setList(list.filter((list, index) => index !== element)), [list]);

  return (
    <div className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <Header listHandler={addListItem} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <List list={list} listDelete={removeListItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
