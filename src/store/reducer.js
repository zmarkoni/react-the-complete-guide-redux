import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    console.log('reducer: ', action);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})  // concat(add new item) return new array which is mandatory
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