import React from "react"
import {useDispatch, useSelector} from "react-redux" 
import {addToCurrentNumber, clear, setCurrentPad, deleteDisplay, addToDisplay} from "./calculationSlice"

function NumberPad ({id, value, className}) {

    const dispatch = useDispatch();
    const display = useSelector((state) => state.calculation.display)
    const currentPad = useSelector((state) => state.calculation.currentPad)

    const clickHandler = () => {

        if(display === "Math Error") {
            dispatch(deleteDisplay())
        } 

        if(currentPad === "=") {
            dispatch(clear())
        }

        dispatch(addToCurrentNumber(value))
        dispatch(setCurrentPad(value))
        dispatch(addToDisplay(value))
    }

    return (
        <div 
            id={id}
            className={className}
            tabIndex={0}
            onClick={clickHandler}
        >
            {value}
        </div> 
    )
};

export default NumberPad 