import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "../../actions";
import "./alert.scss";

export const Alert = () => {
    const dispatch = useDispatch();
    const type = useSelector(state => state.alertReducer.alertType);
    const visible = useSelector(state => state.alertReducer.visible);
    const text = useSelector(state => state.alertReducer.alertText);

    const onAlertHide = (e) => {
        dispatch(hideAlert());
    }

    if (!visible) {
        return null;
    };

    return (
        <div className={`alert alert-${type || 'warning'} alert-dismissible fade show`} role="alert" >
            <strong>Attention!</strong> {text}
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={e => onAlertHide(e)}></button>
        </div >
    )
};