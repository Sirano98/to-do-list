import React from "react";
import "./filter.scss";

export const Filter = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-primary">ALL</button>
            <button type="button" className="btn btn-outline-primary">Done</button>
            <button type="button" className="btn btn-outline-primary">Important</button>
        </div>
    )
}