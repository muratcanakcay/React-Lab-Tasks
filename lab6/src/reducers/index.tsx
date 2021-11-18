import { combineReducers } from "redux"
import boardReducer from "./boardReducer"
import snakeReducer from "./snakeReducer"

export default combineReducers({
    boardSize: boardReducer,
    snake: snakeReducer
})