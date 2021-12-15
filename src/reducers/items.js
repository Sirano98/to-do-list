const createItem = (state) => {
    const newItem = {
        title: state.inputValue,
        date: new Date().toLocaleDateString(),
        id: Date.now()
    }

    state.inputValue = "";

    return { ...state, items: [...state.items, newItem] }
};

export {
    createItem
};