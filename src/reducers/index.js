const createItem = (state) => {
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
    return { ...state, items: newData }
};

export {
    createItem,
    createAlert,
    itemStateToggle
};