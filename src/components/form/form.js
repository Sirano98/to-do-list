import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInput, addItem, showAlert, hideAlert } from "../../actions";
import "./form.scss";

export const Form = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.listReducer.inputValue);

    const onInputSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            dispatch(addItem());
            dispatch(showAlert("success"));
            setTimeout(() => dispatch(hideAlert()), 2500);
        } else {
            dispatch(showAlert());
            setTimeout(() => dispatch(hideAlert()), 2500);
        }
    };

    return (
        <form
            className="wrapper form"
            onSubmit={e => onInputSubmit(e)}
        >
            <input
                type="text"
                className="form-control"
                placeholder="Enter note text"
                onChange={e => dispatch(updateInput(e.target.value))}
                value={inputValue}
            />
            <button type="submit" className="btn btn-primary submit-btn">Enter</button>
        </form>

    )
}