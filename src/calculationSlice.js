import {createSlice} from "@reduxjs/toolkit"
import calculate from "./calculation.js"

const initialState = {
    currentPad: "",
    currentNumber: "",
    numberArray: [],
    operationArray: [],
    result: "",
    display: "",
    stateArray: []
}

const calculationSlice = createSlice({
    name: "calculation",
    initialState,
    reducers: {
        setCurrentPad: (state,action) => {
            state.currentPad = action.payload;
        },

        addToCurrentNumber: (state, action) => {
            state.currentNumber = state.currentNumber + action.payload;
        },

        addToOperationArray: (state,action) => {
            state.operationArray = [...state.operationArray, action.payload];
        },

        addToNumberArray: (state) => {
            state.numberArray = [...state.numberArray, state.currentNumber];
            state.currentNumber = ""
        },

        addToDisplay: (state,action) => {
            state.display = state.display + action.payload;
        },

        setDisplay: (state, action) => {
            state.display = action.payload;
        },

        deleteCurrentNumber: (state) => {
            state.currentNumber = "";
        },

        deleteDisplay: (state) => {
            state.display = "";
        },

        deleteResult: (state) => {
            state.result = "";
        },

        clear: (state) => {
            state.currentPad = "";
            state.currentNumber = "";
            state.numberArray = [];
            state.operationArray = [];
            state.result = "";
            state.display = "";
            state.stateArray = [];
        },

        equals: (state) => {
            const calcResult = calculate(state.numberArray, state.operationArray);
            state.result = calcResult;

            state.operationArray = [];
            state.numberArray = [];
            state.stateArray = [];
            if(state.result === "Math Error") {
                return
            } else {
                state.currentNumber = state.result;
                state.stateArray = [];
            }
        },

        addCurrentStateToArray: (state) => {
            state.stateArray = [...state.stateArray, {
                currentPad: state.currentPad,
                currentNumber: state.currentNumber,
                numberArray: state.numberArray,
                operationArray: state.operationArray,
                result: state.result,
                display: state.display, 
            }]
        },

        deleteLastState: (state) => {

            if (state.stateArray.length === 0) {
                return
            } else if (state.stateArray.length === 1) {
                state.currentPad = "";
                state.currentNumber = "";
                state.numberArray = [];
                state.operationArray = [];
                state.result = "";
                state.display = "";
            } else {
            
            console.log(state.stateArray)
                   
            state.stateArray = state.stateArray.slice(0, -1 );
            const lastState = state.stateArray[state.stateArray.length - 1]; 

            state.currentPad = lastState.currentPad;
            state.currentNumber = lastState.currentNumber;
            state.numberArray = lastState.numberArray;
            state.operationArray = lastState.operationArray;
            state.result = lastState.result;
            state.display = lastState.display
            }   


            
            
        }
    }
});

export const {setCurrentPad} = calculationSlice.actions;
export const {addToCurrentNumber} = calculationSlice.actions;
export const {addToOperationArray} = calculationSlice.actions;
export const {addToNumberArray} = calculationSlice.actions;
export const {addToDisplay} = calculationSlice.actions;
export const {deleteCurrentNumber} = calculationSlice.actions;
export const {deleteDisplay} = calculationSlice.actions;
export const {clear} = calculationSlice.actions;
export const {equals} = calculationSlice.actions;
export const {deleteResult} = calculationSlice.actions;
export const {setDisplay} = calculationSlice.actions;
export const {addCurrentStateToArray} = calculationSlice.actions;
export const {deleteLastState} = calculationSlice.actions;

export default calculationSlice.reducer;
