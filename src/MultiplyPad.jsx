import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setCurrentPad, addToOperationArray, addToNumberArray, deleteDisplay, addToDisplay, deleteCurrentNumber} from "./calculationSlice.js"


function MultiplyPad () {

    const dispatch = useDispatch();
    const currentPad = useSelector((state) => state.calculation.currentPad);
    const currentNumber = useSelector((state) => state.calculation.currentNumber);

    const clickHandler = () => {

        if(currentNumber === "" || currentNumber === "-") {
            return

        } else if (currentPad === "=") {
            dispatch(deleteDisplay())
            dispatch(addToDisplay(currentNumber + "x"))
            dispatch(addToNumberArray())
            dispatch(addToOperationArray("*"))
            dispatch(setCurrentPad("*"))
        
        } else {
            dispatch(setCurrentPad("*"))
            dispatch(addToOperationArray("*"))
            dispatch(addToDisplay("x"))
            dispatch(addToNumberArray())
            dispatch(deleteCurrentNumber())
        }
    }

    return (
        <div
            id="multiply"
            className="pad"
            tabIndex={0}
            onClick={clickHandler}
        >
            x
        </div> 
    )
};

export default MultiplyPad