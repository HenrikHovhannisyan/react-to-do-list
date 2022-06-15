import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import List from "./components/list";

function App() {
  const [list, setList] = useState([]);

  const addListItem = (item) => setList((list) => [...list, item]);

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
            <List list={list} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
