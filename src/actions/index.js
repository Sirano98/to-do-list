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

export {
    addItem,
    removeItem,
    updateInput,
    showAlert,
    hideAlert
};
