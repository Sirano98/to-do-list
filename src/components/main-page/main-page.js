import React from "react";
import { Form } from "../form/form";
import { Alert } from "../alert/alert";
import { TodoList } from "../todo-list/todo-list";
import "./main-page.scss";

export const MainPage = () => {
    return (
        <main className="main">
            <Alert />
            <Form />
            <TodoList />
        </main>
    )
}