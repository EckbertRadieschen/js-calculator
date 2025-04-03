import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setCurrentPad, addToOperationArray, deleteDisplay, addToNumberArray, addToDisplay, deleteCurrentNumber} from "./calculationSlice.js"

function DividePad () {

    const dispatch = useDispatch();
    const currentPad = useSelector((state) => state.calculation.currentPad);
    const currentNumber = useSelector((state) => state.calculation.currentNumber);

    const clickHandler = () => {

        if(currentNumber === "" || currentNumber === "-") {
            return
        } else if (currentPad === "=") {
            dispatch(deleteDisplay())
            dispatch(addToDisplay(currentNumber + "/"))
            dispatch(addToNumberArray())
            dispatch(addToOperationArray("/"))
            dispatch(setCurrentPad("/"))
                
                } else {
            dispatch(setCurrentPad("/"))
            dispatch(addToOperationArray("/"))
            dispatch(addToDisplay("/"))
            dispatch(addToNumberArray())
            dispatch(deleteCurrentNumber())
        }
    }
    
    return (
        <div
            id="divide"
            className="pad"
            tabIndex={0}
            onClick={clickHandler}
        >
            /
        </div> 
    )
};

export default DividePad