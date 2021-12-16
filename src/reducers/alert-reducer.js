import { createAlert } from ".";

const initialState = {
    alertText: "",
    alertType: "",
    visible: false
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_ALERT":
            return { ...state, alertText: createAlert(action.payload), alertType: action.payload, visible: true }

        case "HIDE_ALERT":
            return { ...state, visible: false }

        default:
            return state;
    }
}