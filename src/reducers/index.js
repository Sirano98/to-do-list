import { updateLocalStorege } from "../utils/localStorege";

const createItem = (state, payload) => {
    const { items, inputValue } = state;

    if (payload) {
        return { ...state, items: [...payload] }
    }

    const newItem = {
        title: inputValue,
        date: new Date().toLocaleDateString(),
        id: Date.now(),
        important: false,
        done: false
    }

    state.inputValue = "";
    const newItems = [...items, newItem];
    updateLocalStorege(newItems);

    return { ...state, items: newItems }
};

const deleteItem = (state, id) => {
    const { items, filter, searchInputValue } = state;

    const newItems = items.filter(item => item.id !== id);
    updateLocalStorege(newItems);
    return { ...state, items: newItems, visibleItems: filterItems(newItems, filter, searchInputValue) }
}

const createAlert = (type) => {
    let text = "";
    type ? text = "Note has been added" : text = "Enter note text";
    return text;
};

const itemStateToggle = (state, payload, stateName) => {
    const { items, filter, searchInputValue } = state;

    const index = items.findIndex(({ id }) => id === payload);
    const oldItem = items[index];
    const newItem = {
        ...oldItem,
        [stateName]: !oldItem[stateName]
    }
    const newData = [
        ...items.slice(0, index),
        newItem,
        ...items.slice(index + 1)
    ]

    const newVisibleItems = filterItems(newData, filter, searchInputValue);
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