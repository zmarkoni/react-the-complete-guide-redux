export const updateObject = (state, newValue) => {
    return {
        ...state,
        ...newValue
    }
};