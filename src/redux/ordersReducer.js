let initialState = [];

export const OrdrersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDERS":
            return [...state];

        case "SET_ORDERS":
            return [...state, action.items];

        case "CLEAN_TRASH":
            state = [];
            return [];
        case "DELETE_ORDERS":
            let newArr =[]
            newArr = state.filter(el => el !== action.items)
            return newArr
        default:
            return [...state];
    }
};

export const getOredersAC = () => {
    return {
        type: "GET_ORDERS",
    };
};
export const setOrdersAC = (items) => {
    return {
        type: "SET_ORDERS",
        items,
    };
};
export const deleteOrdersAC = (items) => {
    return {
        type: "DELETE_ORDERS",
        items,
    };
};
export const cleanOrdersAC = () => {
    return {
        type: "CLEAN_TRASH",
    };
};