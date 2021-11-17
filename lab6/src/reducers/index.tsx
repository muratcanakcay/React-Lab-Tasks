import { combineReducers } from "redux"
import rowsReducer from "./rowsReducer"
import colsReducer from "./colsReducer"

export default combineReducers({
    nRows: rowsReducer,
    nCols: colsReducer
})