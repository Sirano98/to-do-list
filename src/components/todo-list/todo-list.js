import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { TodoListItem } from "../todo-list-item/todo-list-item";
import "./todo-list.scss";

export const TodoList = ({ items }) => {

    if (items.length === 0) {
        return (
            <p className="text text-center">No tasks were found</p>
        )
    };

    return (
        <TransitionGroup component="ul" className="list-group">
            {
                items.map(({ title, id, date, important, done }) => (
                    <CSSTransition
                        key={id}
                        classNames={"note"}
                        timeout={{
                            enter: 800,
                            exit: 800,
                        }}
                    >
                        <TodoListItem
                            title={title}
                            date={date}
                            id={id}
                            important={important}
                            done={done} />
                    </CSSTransition>
                ))}
        </TransitionGroup>
    )
};