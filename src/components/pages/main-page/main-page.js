import React from "react";
import { useSelector } from "react-redux";
import { Form } from "../../form/form";
import { Alert } from "../../alert/alert";
import { TodoList } from "../../todo-list/todo-list";
import "./main-page.scss";

export const MainPage = () => {
    const items = useSelector(state => state.listReducer.items);
    return (
        <main className="main">
            <Alert />
            <Form />
            <TodoList items={items} />
        </main>
    )
}