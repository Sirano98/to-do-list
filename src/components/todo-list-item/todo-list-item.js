import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../actions";
import "./todo-list-item.scss";

export const TodoListItem = ({ title, id, date }) => {
    const dispatch = useDispatch();

    const onItemDelete = () => {
        dispatch(removeItem(id));
    };

    return (
        <li className="list-group-item item">
            <div>
                <strong>{title}</strong>
                <small className="date">{date}</small>
            </div>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onItemDelete(id)}>&times;</button>
        </li>
    )
}