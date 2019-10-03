import * as actionTypes from "./actionsTypes";

export const saveResult = (res) => {
    return {
            type: actionTypes.STORE_RESULT,
            result: res
        }
};

export const storeResult = (res) => {
    return (dispatch) => { // dispatch coming from THUNK
        setTimeout(() => {
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
