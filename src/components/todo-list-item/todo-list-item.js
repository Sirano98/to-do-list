import React from "react";
import "./todo-list-item.scss";

export const TodoListItem = ({ title, id, date }) => {
    return (
        <li className="list-group-item item" key={id}>
            <div>
                <strong>{title}</strong>
                <small className="date">{date}</small>
            </div>
            <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
        </li>
    )
}