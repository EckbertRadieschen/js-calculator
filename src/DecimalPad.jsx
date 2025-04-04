import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {addToCurrentNumber, addCurrentStateToArray, clear, addToDisplay} from "./calculationSlice.js"



function DecimalPad () {
    
    const dispatch = useDispatch();
    const currentPad = useSelector((state) => state.calculation.currentPad)
    const currentNumber = useSelector((state) => state.calculation.currentNumber);
    
    const clickHandler = () => {

        if (currentPad === "=" || currentNumber === "") {
            dispatch(clear())
            dispatch(addToCurrentNumber("0."))
            dispatch(addToDisplay("0."))
            dispatch(addCurrentStateToArray())
        } else if (currentNumber.includes(".")) {
            return
        } else {
            dispatch(addToCurrentNumber("."))
            dispatch(addToDisplay("."))
            dispatch(addCurrentStateToArray())
        }
    }

    return (
        <div 
            id="decimal" 
            className="pad"
            tabIndex={0}
            onClick={clickHandler}>
            .
        </div>
    )
};

export default DecimalPad