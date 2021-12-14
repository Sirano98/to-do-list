import React from "react";
import "./form.scss";

export const Form = () => {
    return (
        <form>
            <div className="col-auto form">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter note text"
                />
            </div>
        </form>
    )
}