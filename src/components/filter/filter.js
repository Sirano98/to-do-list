import React from "react";
import "./filter.scss";

export const Filter = () => {
    return (
        <form className="wrapper form search-form">
            <input
                type="text"
                className="form-control"
                placeholder="Enter note text"
            // onChange={e => onInputChange(e)}
            // value={inputValue}
            />
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-primary">ALL</button>
                <button type="button" className="btn btn-outline-primary">Done</button>
                <button type="button" className="btn btn-outline-primary">Important</button>
            </div>
        </form>
    )
}