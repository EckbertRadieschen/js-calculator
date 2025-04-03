import {equals, setCurrentPad, setDisplay, deleteResult, addToDisplay, addToNumberArray} from "./calculationSlice.js"

const processEquals = () => (dispatch, getState) => {
    dispatch(addToNumberArray()); 

    setTimeout(() => {
        const state = getState().calculation;
        console.log("DEBUG: numberArray vor equals:", state.numberArray);
        console.log("DEBUG: operationArray vor equals:", state.operationArray);
        
        dispatch(equals());

        dispatch(setCurrentPad("="));
        
    }, 0);
    
    setTimeout(() => {
        const state = getState().calculation;
        console.log("DEBUG: result nach equals:", state.result);
        if (state.result === "Math Error") {
            dispatch(setDisplay("Math Error"))
            dispatch(deleteResult())
        } else {
            dispatch(addToDisplay(`=${state.result}`));
        }
    }, 1);
};

export default processEquals