const snakeReducer = (state = [{ x: 0, y: 0 }], action: any) => {
    switch (action.type) {
        case "SET_SNAKE_POS":
            return action.payload
        default:
            return state
    }
}

export default snakeReducer