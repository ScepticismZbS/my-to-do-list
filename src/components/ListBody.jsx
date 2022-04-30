import React from "react";

const ListBody = ({toDoItems}) => {
    return (
        <div>
            <ul>
                {toDoItems.map((item) => (
                    <li key={item.id}>
                        {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListBody