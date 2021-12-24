import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAll } from "../../../actions";
import { Filter } from "../../filter/filter";
import { TodoList } from "../../todo-list/todo-list";

export const SearchPage = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.listReducer.visibleItems);

    useEffect(() => {
        dispatch(showAll())
    }, [])

    return (
        <Fragment>
            <Filter />
            <TodoList items={items} />
        </Fragment>
    )
};