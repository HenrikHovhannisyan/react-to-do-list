import { useState } from 'react';
import './App.css';
import Header from './components/header';
import List from './components/list';

function App() {
  const {list, setList} = useState([]);

  const addListItem = (item) => setList(item);

  return (
    <div className="App">
      <Header item={addListItem} />
      <List list={list} />
    </div>
  );
}

export default App;
