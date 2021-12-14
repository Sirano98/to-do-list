const initialState = {
    items: [
        {
            title: "note 1",
            id: 1
        },
        {
            title: "note 2",
            id: 2
        },
        {
            title: "note 3",
            id: 3
        }
    ]
};

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] }

        case "REMOVE_ITEM":
            return { ...state, item: state.items.filter(item => item.id !== action.payload) }

        default:
            return state;
    }
};