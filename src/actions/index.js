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

export {
    addItem,
    removeItem,
    updateInput
};
