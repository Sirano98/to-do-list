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

// const updateFilterInput = (payload) => {
//     return {
//         type: "UPDATE_FILTER_INPUT",
//         payload
//     }
// };

const showSearchResults = (payload) => {
    return {
        type: "SHOW_SEARCH_RESULTS",
        payload
    }
};

const showAll = (payload) => {
    return {
        type: "SHOW_ALL",
        payload
    }
};

const showDone = (payload) => {
    return {
        type: "SHOW_DONE",
        payload
    }
};

const showImportant = (payload) => {
    return {
        type: "SHOW_IMPORTANT",
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
    doneToggle,
    // updateFilterInput,
    showAll,
    showDone,
    showImportant,
    showSearchResults
};
