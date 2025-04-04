import React from "react"
import {useDispatch} from "react-redux"
import {deleteLastState} from "./calculationSlice.js" 

function DeletePad () {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(deleteLastState())
        
    }
    
    return (
        <div 
        id="delete" 
        className="pad delete"
        tabIndex={0}
        onClick={clickHandler}
        >
            DEL    
        </div>
    )
}

export default DeletePad