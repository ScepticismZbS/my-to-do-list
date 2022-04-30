import React from "react";
import cl from "./MyButton.module.css"

const MyButton = ({children, addToDo, inputValue}) => {
    return (
        <button onClick={() => {addToDo(inputValue)}} className={cl.mybtn}>
            {children}
        </button>
    );
};

export default MyButton