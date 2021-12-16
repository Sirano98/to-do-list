const createItem = (state) => {
    const newItem = {
        title: state.inputValue,
        date: new Date().toLocaleDateString(),
        id: Date.now()
    }
    state.inputValue = "";

    return { ...state, items: [...state.items, newItem] }
};

const createAlert = (type) => {
    let text = "";
    type ? text = "Note has been added" : text = "Enter note text"
    return text
};

export {
    createItem,
    createAlert
};