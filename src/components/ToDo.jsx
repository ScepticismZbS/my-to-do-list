import React from "react";

const ToDo = ({todo, toggleTask, removeToDo}) => {
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.isComplete ?  "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}>
                {todo.value}
            </div>
            <div className="item-delete" onClick={() => removeToDo(todo.id)}>
                x
            </div>

            
        </div>
    );
};

export default ToDo