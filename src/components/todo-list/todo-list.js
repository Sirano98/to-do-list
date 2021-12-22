import React from "react";
import { useSelector } from "react-redux";
import { TodoListItem } from "../todo-list-item/todo-list-item";
import "./todo-list.scss";

export const TodoList = () => {
    const items = useSelector(state => state.listReducer.items);

    if (items.length === 0) {
        return (
            <p className="text text-center">Create new task</p>
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