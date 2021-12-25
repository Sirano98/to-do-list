import { updateLocalStorege } from "../utils/localStorege";

const createItem = (state, payload) => {

    if (payload) {
        return { ...state, items: [...payload] }
    }

    const newItem = {
        title: state.inputValue,
        date: new Date().toLocaleDateString(),
        id: Date.now(),
        important: false,
        done: false
    }
    state.inputValue = "";

    return { ...state, items: [...state.items, newItem] }
};

const deleteItem = (state, id) => {
    const newItems = state.items.filter(item => item.id !== id);
    updateLocalStorege(newItems);
    return { ...state, items: newItems, visibleItems: filterItems(newItems, state.filter, state.searchInputValue) }
}

const createAlert = (type) => {
    let text = "";
    type ? text = "Note has been added" : text = "Enter note text"
    return text;
};

const itemStateToggle = (state, payload, stateName) => {
    const index = state.items.findIndex(({ id }) => id === payload);
    const oldItem = state.items[index];
    const newItem = {
        ...oldItem,
        [stateName]: !oldItem[stateName]
    }
    const newData = [
        ...state.items.slice(0, index),
        newItem,
        ...state.items.slice(index + 1)
    ]

    const newVisibleItems = filterItems(newData, state.filter, state.searchInputValue);
    updateLocalStorege(newData);

    return { ...state, items: newData, visibleItems: newVisibleItems }
};

const filterItems = (items, filter, searchStr) => {
    if (searchStr.trim()) {
        items = items.filter(item => item.title.indexOf(searchStr) > -1)
    }

    if (filter) {
        filter = filter.toLowerCase();
        return items.filter(item => item[filter]);
    }
    return items;
};

export {
    createItem,
    deleteItem,
    createAlert,
    itemStateToggle,
    filterItems
};