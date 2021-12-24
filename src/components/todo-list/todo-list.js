import React from "react";
import { TodoListItem } from "../todo-list-item/todo-list-item";
import "./todo-list.scss";

export const TodoList = ({ items }) => {

    if (items.length === 0) {
        return (
            <p className="text text-center">No tasks were found</p>
        )
    };

    return (
        <ul className="list-group">
            {
                items.map(({ title, id, date, important, done }) => <TodoListItem title={title} key={id} date={date} id={id} important={important} done={done} />)
            }
        </ul>
    )
};