import React, { Fragment } from "react";
import { Form } from "../form/form";
import { TodoList } from "../todo-list/todo-list";

export const MainPage = () => {
    return (
        <Fragment>
            <Form />
            <TodoList />
        </Fragment>
    )
}