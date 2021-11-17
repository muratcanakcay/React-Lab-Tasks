const boardReducer = (state = 40, action: any) => {
    switch (action.type) {
        case "SET_BOARD":
            return action.payload * 20
        default:
            return state
    }
}

export default boardReducer