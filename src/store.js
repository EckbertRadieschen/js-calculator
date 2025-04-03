import {configureStore} from "@reduxjs/toolkit"
import calculationReducer from "./calculationSlice"
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        calculation: calculationReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store