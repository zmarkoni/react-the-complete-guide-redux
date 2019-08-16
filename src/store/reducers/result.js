import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    console.log('reducer: ', action);
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})  // concat(add new item) return new array which is mandatory
            };
        case actionTypes.DELETE_RESULT:
            // filter return new array
            const updatedArray = state.results.filter(el => el.id !== action.resultElID);
            return {
                ...state,
                results: updatedArray
            };
    }
    return state;
};

export default reducer;