import React, { useState } from "react";
import cl from "./MyInput.module.css"

const MyInput = () => {

    const [inputValue, setInputValue] = useState('')

    const newValue = (element) => {
        setInputValue(element.target.value)
        console.log(inputValue)
    }



    return(
        <input onChange={newValue}  className={cl.myInput} type="text" placeholder="Введите новый TO-DO" />
    );
};

export default MyInput