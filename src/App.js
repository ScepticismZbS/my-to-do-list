import React from "react";
import ListBody from "./components/ListBody";
import Title from "./components/Title";
import MyInput from "./components/UI/Input/MyInput";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <Title/>
      <MyInput/>
      <ListBody />
    </div>
  );
}

export default App;
