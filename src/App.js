import React, { useState } from "react";
import NewToDo from "./components/NewToDo";
import Title from "./components/Title";
import "./styles/App.css"
import ToDo from "./components/ToDo";

function App() {

  const [toDoItems, setToDoItems] = useState([]);

  const addToDo = (value) => {
    if(value) {
      const toDo = {
        value,
        id: Date.now(),
        isComplete: false
      }
      setToDoItems((toDoItems) => [...toDoItems, toDo])
    }
  }

  const removeToDo = (id) => {
    setToDoItems([...toDoItems.filter((toDoItem) => toDoItem.id !== id)])
  }

  const toggleTask = (id) => {
    setToDoItems([...toDoItems.map((toDoItem) => 
      toDoItem.id === id 
      ? {...toDoItem, isComplete: !toDoItem.isComplete} 
      : {toDoItem}
    )])
  }


  return (
    <div className="App">
      <Title/>
      <NewToDo addToDo={addToDo}/>
      {toDoItems.map((item) => {
        return (
          <ToDo 
            todo={item}
            key={item.id}
            removeToDo={removeToDo}
            toggleTask={toggleTask}
          />
        )
      })}
    </div>
  );
}

export default App;
