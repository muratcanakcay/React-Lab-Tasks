const colsReducer = (state = 8, action: any) => {
    switch (action.type) {
        case "SET_COLS":
            return state + action.payload
        default:
            return state
    }
}

export default colsReducer