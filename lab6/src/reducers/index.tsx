import { combineReducers } from "redux"
import boardReducer from "./boardReducer"
import snakeReducer from "./snakeReducer"
import foodReducer from "./foodReducer"

export default combineReducers({
    boardSize: boardReducer,
    snake: snakeReducer,
    food: foodReducer
})