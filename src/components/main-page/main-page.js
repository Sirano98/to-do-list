import React from "react";
import { Form } from "../form/form";
import { TodoList } from "../todo-list/todo-list";
import { Filter } from "../filter/filter";
import "./main-page.scss";

export const MainPage = () => {
    return (
        <main className="main">
            <Form />
            <Filter />
            <TodoList />
        </main>
    )
}