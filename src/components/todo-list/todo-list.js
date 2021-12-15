import React from "react";
import { useSelector } from "react-redux";
import { TodoListItem } from "../todo-list-item/todo-list-item";
import "./todo-list.scss";

export const TodoList = () => {
    const items = useSelector(state => state.listReducer.items);

    return (
        <ul className="list-group">
            {
                items.map(({ title, id, date }) => <TodoListItem title={title} key={id} date={date} />)
            }
        </ul>
    )
}