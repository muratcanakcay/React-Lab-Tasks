const rowsReducer = (state = 8, action: any) => {
    switch (action.type) {
        case "SET_ROWS":
            return state + action.payload
        default:
            return state
    }
}

export default rowsReducer