import React, {useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";


const NewToDo = ({addToDo}) => {

   
    const [inputValue, setInputValue] = useState('')

    

    return(
        <div className="newToDo">
            <MyInput inputValue={inputValue} setInputValue={setInputValue}/>
            <MyButton addToDo={addToDo} inputValue={inputValue}>Add</MyButton>
        </div>

    );
};

export default NewToDo
