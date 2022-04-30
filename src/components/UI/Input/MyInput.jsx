import React from "react";
import cl from "./MyInput.module.css"

const MyInput = ({inputValue, setInputValue}) => {



    return(
        <input className={cl.myInput} value={inputValue} onChange={(event) => {setInputValue(event.target.value)}} type="text" placeholder="Введите новый TO-DO" />
    );
};

export default MyInput