const addItem = () => {
    return {
        type: "ADD_ITEM"
    }
};

const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id
    }
};

const updateInput = (payload) => {
    return {
        type: "UPDATE_INPUT",
        payload
    }
};

export {
    addItem,
    removeItem,
    updateInput
};
