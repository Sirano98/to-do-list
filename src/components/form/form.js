import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInput, addItem } from "../../actions";
import "./form.scss";

export const Form = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.listReducer.inputValue);

    const onInputChange = (e) => {
        dispatch(updateInput(e.target.value));
    };

    const onInputSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem());
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
                onChange={e => onInputChange(e)}
                value={inputValue}
            />
            <button type="submit" className="btn btn-primary">Enter</button>
        </form>
    )
}