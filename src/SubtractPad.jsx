import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {addToCurrentNumber, addCurrentStateToArray, addToDisplay, deleteDisplay, setCurrentPad, addToNumberArray, addToOperationArray} from "./calculationSlice.js"


function SubtractPad () {

    const dispatch = useDispatch();
    
    const display = useSelector ((state) => state.calculation.display)
    const currentPad = useSelector((state) => state.calculation.currentPad);
    const currentNumber = useSelector((state) => state.calculation.currentNumber);
    
    const clickHandler = () => {

        const operationCond = (currentPad === "*" ||
            currentPad === "+" ||
            currentPad === "-" ||
            currentPad === "/")

        if (display === "Math Error") {
            return
        } else if (
             operationCond && 
            currentNumber !== "-"
        ) {
            dispatch(addToCurrentNumber("-"))
            dispatch(addToDisplay("-"))
            dispatch(setCurrentPad("-"))
            dispatch(addCurrentStateToArray())

        } else if (
            operationCond && 
            currentNumber === "-"
        ) {
            return

        } else if (
            !operationCond && currentNumber === ""
        ) {
            dispatch(addToCurrentNumber("-"))
            dispatch(addToDisplay("-"))
            dispatch(setCurrentPad("-"))
            dispatch(addCurrentStateToArray())

        } else if (currentPad === "=") {
            dispatch(deleteDisplay())
            dispatch(addToDisplay(currentNumber + "-"))
            dispatch(addToNumberArray())
            dispatch(addToOperationArray("-"))
            dispatch(setCurrentPad("-"))
            dispatch(addCurrentStateToArray())

        } else {
            dispatch(addToOperationArray("-"))
            dispatch(addToNumberArray())
            dispatch(addToDisplay("-"))
            dispatch(setCurrentPad("-"))
            dispatch(addCurrentStateToArray())
        } 
    }

    return (
        <div
            id="subtract"
            className="pad"
            tabIndex={0}
            onClick={clickHandler}
        >
            -
        </div> 
    )
};

export default SubtractPad