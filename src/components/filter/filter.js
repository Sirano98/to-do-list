import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSearchResults, showAll, showDone, showImportant } from "../../actions";
import "./filter.scss";

export const Filter = () => {
    const dispatch = useDispatch();
    const inputFilterValue = useSelector(state => state.listReducer.searchInputValue);
    const filter = useSelector(state => state.listReducer.filter);

    const onSearchChange = (e) => {
        dispatch(showSearchResults(e.target.value))
    }

    return (
        <form
            className="wrapper form search-form"
            onSubmit={e => e.preventDefault()}>
            <input
                type="text"
                className="form-control"
                placeholder="Enter search text"
                onChange={e => onSearchChange(e)}
                value={inputFilterValue}
            />
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className={`btn ${filter ? "btn-outline-primary" : "btn-primary"}`}
                    onClick={() => dispatch(showAll(""))}
                >ALL</button>
                <button
                    type="button"
                    className={`btn ${filter === "done" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => dispatch(showDone("done"))}
                >Done</button>
                <button
                    type="button"
                    className={`btn ${filter === "important" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => dispatch(showImportant("important"))}
                >Important</button>
            </div>
        </form>
    )
}