import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    // filter return new array
    const updatedArray = state.results.filter(el => el.id !== action.resultElID);
    return updateObject(state, {results: updatedArray});
};

const storeResult = (state, action) => {
    return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
    // return {
    //     ...state,
    //     results: state.results.concat({id: new Date(), value: action.result})  // concat(add new item) return new array which is mandatory
    // };
};

const reducer = (state = initialState, action) => {
    console.log('reducer: ', action);
    switch (action.type) {
        // Writing cleaner Reducer with helper functions
        case actionTypes.STORE_RESULT: return storeResult(state, action);
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    }
    return state;
};

export default reducer;