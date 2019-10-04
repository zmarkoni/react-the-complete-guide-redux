import * as actionTypes from "./actionsTypes";

export const saveResult = (res) => {
    // Here we can manipulate with result, but it is better to be done in Reducer
    // res = res * 2;
    // const updatedResult = res = res * 2;
    return {
            type: actionTypes.STORE_RESULT,
            result: res
        }
};

// Async Redux with THUNK
// Thunk return 2 functions (dispatch, getState)
// dispatch(saveResult(res)); Here we execute our function saveResult after async is done, with help of dispatch
// So dispatch works same like promise!
export const storeResult = (res) => {
    return (dispatch, getState) => { // dispatch coming from THUNK
        setTimeout(() => {
            // Here we can access state before dispatch
            // const oldCounter = getState().ctr.counter;
            // console.log('oldCounter: ', oldCounter);
            // It is better if we can pass all needed info by arguments, when we dispatch actions in mapDispatchToProps

           // simulate async code to call database
            dispatch(saveResult(res));
        }, 2000);
    };
};

export const deleteResult = (resElID) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElID: resElID
    }
};
