import React from "react"
import {useSelector} from "react-redux"

function Display () {
    const currentPad = useSelector((state) => state.calculation.currentPad)
    const result = useSelector((state) => state.calculation.result)
    const display = useSelector((state) => state.calculation.display)
    const currentNumber = useSelector((state) => state.calculation.currentNumber)

    const conditionChecker = () => {
        if ( currentPad === "=") {
            return result
        } else if (currentNumber !== "") {
            return currentNumber
        } else {
            return currentPad
        }
    }

    return (
        <div id="display">
            <p id="firstLine" className="firstLine">
                {display}
            </p>
            <p id="secondLine" className="secondLine">
                {conditionChecker()}
            </p>
        </div>
    )
}

export default Display