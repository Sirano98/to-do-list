import { createItem, deleteItem, filterItems, itemStateToggle } from ".";

const initialState = {
    inputValue: "",
    searchInputValue: "",
    filter: "",
    items: [],
    visibleItems: [],
};

export const listReducer = (state = initialState, action) => {
    const { items, searchInputValue, filter } = state;
    const { payload, type } = action;

    switch (type) {
        case "ADD_ITEM":
            return createItem(state, payload)

        case "REMOVE_ITEM":
            return deleteItem(state, payload)

        case "UPDATE_INPUT":
            return { ...state, inputValue: payload }

        case "IMPORTANT_ITEM_TOGGLE":
            return itemStateToggle(state, payload, "important")

        case "DONE_ITEM_TOGGLE":
            return itemStateToggle(state, payload, "done")

        case "SHOW_ALL":
            return { ...state, visibleItems: filterItems(items, payload, searchInputValue), filter: "" }

        case "SHOW_DONE":
            return { ...state, visibleItems: filterItems(items, payload, searchInputValue), filter: payload }

        case "SHOW_IMPORTANT":
            return { ...state, visibleItems: filterItems(items, payload, searchInputValue), filter: payload }

        case "SHOW_SEARCH_RESULTS":
            return { ...state, searchInputValue: payload, visibleItems: filterItems(items, filter, payload) }

        default:
            return state;
    }
};