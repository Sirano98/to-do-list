import React from "react";

export const TodoListItem = ({ title, id }) => {
    return (
        <li className="list-group-item" key={id}>{title}</li>
    )
}