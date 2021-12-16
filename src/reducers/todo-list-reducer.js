import { createItem } from ".";

const initialState = {
    inputValue: "",
    items: []
};

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return createItem(state)

        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter(item => item.id !== action.payload) }

        case "UPDATE_INPUT":
            return { ...state, inputValue: action.payload }

        default:
            return state;
    }
};