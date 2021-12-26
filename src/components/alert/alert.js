import React from "react";
import { CSSTransition } from "react-transition-group";
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

    return (
        <CSSTransition
            in={visible}
            timeout={{
                enter: 800,
                exit: 350,
            }}
            classNames={"alert"}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${type || 'warning'} alert-dismissible fade show`} role="alert" >
                <strong>Attention!</strong> {text}
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={e => onAlertHide(e)}></button>
            </div >
        </CSSTransition>
    )
};