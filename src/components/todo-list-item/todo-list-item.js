import React from "react";
import { useDispatch } from "react-redux";
import { doneToggle, importantToggle, removeItem } from "../../actions";
import "./todo-list-item.scss";

export const TodoListItem = ({ title, id, date, important, done }) => {
    const dispatch = useDispatch();

    let cls = "";
    if (done) {
        cls += " done"
    }
    if (important) {
        cls += " important"
    }

    return (
        <li className="list-group-item item">
            <div className="data-wrapper"
                onClick={() => dispatch(doneToggle(id))}>
                <span className={`item-text ${cls}`}>{title}</span>
                <small className="date">{date}</small>
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => dispatch(removeItem(id))}>&times;</button>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={() => dispatch(importantToggle(id))}>&#x21;</button>
            </div>
        </li >
    )
}