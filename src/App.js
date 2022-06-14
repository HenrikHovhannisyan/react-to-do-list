import { useState } from 'react';
import './App.css';
import Header from './components/header';
import List from './components/list';

function App() {
  const [list, setList] = useState([]);

  const addListItem = (item) => setList(item);
  console.log(list)
  return (
    <div className="App">
      <div>
        <Header listHandler={addListItem} />
      </div>
      <div>
        <List list={list} />
      </div>
    </div>
  );
}

export default App;
