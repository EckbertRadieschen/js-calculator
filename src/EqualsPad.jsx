import React from "react"
import {useDispatch, useSelector} from "react-redux"
import processEquals from "./calculationThunks.js"

function EqualsPad () {

    const dispatch = useDispatch();
    const currentPad = useSelector((state) => state.calculation.currentPad)

    const clickHandler = () => {
        if (currentPad === "=") {
            return
        } else {
        dispatch(processEquals());
        };        
    }

    return (
        <div
            id="equals"
            className="pad double-height equals"
            tabIndex={0}
            onClick={clickHandler}
        >
        =
        </div>
    )
};

export default EqualsPad