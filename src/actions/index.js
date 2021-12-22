const addItem = () => {
    return {
        type: "ADD_ITEM"
    }
};

const removeItem = (payload) => {
    return {
        type: "REMOVE_ITEM",
        payload
    }
};

const updateInput = (payload) => {
    return {
        type: "UPDATE_INPUT",
        payload
    }
};

const showAlert = (payload) => {
    return {
        type: "SHOW_ALERT",
        payload
    }
};

const hideAlert = () => {
    return {
        type: "HIDE_ALERT"
    }
};

const importantToggle = (payload) => {
    return {
        type: "IMPORTANT_ITEM_TOGGLE",
        payload
    }
};

const doneToggle = (payload) => {
    return {
        type: "DONE_ITEM_TOGGLE",
        payload
    }
};

export {
    addItem,
    removeItem,
    updateInput,
    showAlert,
    hideAlert,
    importantToggle,
    doneToggle
};
