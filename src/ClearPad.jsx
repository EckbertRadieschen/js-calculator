import React from "react"
import {useDispatch} from "react-redux"
import {clear} from "./calculationSlice.js"

function clearPad () {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(clear())
    }

    return (
        <div 
            id="clear" 
            className="pad clear" 
            tabIndex={0}
            onClick={clickHandler}
            >
            AC    
            </div>
    )
};

export default clearPad