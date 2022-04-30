import React, { useState } from "react";
import ListBody from "./components/ListBody";
import NewToDo from "./components/NewToDo";
import Title from "./components/Title";
import "./styles/App.css"

function App() {

  const [toDoItems, setToDoItems] = useState([]);
  const [id, setId] = useState('')

  

  const addToDo = (value) => {
    const toDo = {
      value,
      id,
      isDone: false
    }
    setToDoItems((toDoItems) => [...toDoItems, toDo])
    console.log(toDo)
    console.log(toDoItems)
    console.log("RABOTAET")

  }

  return (
    <div className="App">
      <Title/>
      <NewToDo addToDo={addToDo}/>
      <ListBody toDoItems={toDoItems}/>
    </div>
  );
}

export default App;
