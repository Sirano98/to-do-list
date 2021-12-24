import { createItem, filterItems, itemStateToggle } from ".";

const initialState = {
    inputValue: "",
    searchInputValue: "",
    filter: "",
    items: [],
    visibleItems: [],
};

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return createItem(state)

        case "REMOVE_ITEM":
            const newItems = state.items.filter(item => item.id !== action.payload);
            return { ...state, items: newItems, visibleItems: filterItems(newItems, state.filter) }

        case "UPDATE_INPUT":
            return { ...state, inputValue: action.payload }

        case "IMPORTANT_ITEM_TOGGLE":
            return itemStateToggle(state, action.payload, "important")

        case "DONE_ITEM_TOGGLE":
            return itemStateToggle(state, action.payload, "done")

        case "SHOW_ALL":
            return { ...state, visibleItems: state.items, filter: "" }

        case "SHOW_DONE":
            return { ...state, visibleItems: filterItems(state.items, action.payload, state.searchInputValue), filter: action.payload }

        case "SHOW_IMPORTANT":
            return { ...state, visibleItems: filterItems(state.items, action.payload, state.searchInputValue), filter: action.payload }

        case "SHOW_SEARCH_RESULTS":
            return { ...state, searchInputValue: action.payload, visibleItems: filterItems(state.items, state.filter, action.payload) }

        default:
            return state;
    }
};