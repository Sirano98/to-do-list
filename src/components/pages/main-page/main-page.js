import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../form/form";
import { Alert } from "../../alert/alert";
import { TodoList } from "../../todo-list/todo-list";
import { addItem } from "../../../actions";
import { updateLocalStorege } from "../../../utils/localStorege";
import "./main-page.scss";

export const MainPage = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.listReducer.items);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("items"));
        if (notes && notes.length) {
            dispatch(addItem(notes))
        }
    }, [])

    useEffect(() => {
        updateLocalStorege(items);
    }, [items]);


    return (
        <main className="main">
            <Alert />
            <Form />
            <TodoList items={items} />
        </main>
    )
}