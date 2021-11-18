import { pos } from "../interfaces"

const snakeReducer = (state: pos[] = [{ r: 0, c: 0 }], action: any) => {
    switch (action.type) {
        case "SET_SNAKE_POS":
            return action.payload
        default:
            return state
    }
}

export default snakeReducer