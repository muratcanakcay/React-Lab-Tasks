import { pos } from "../interfaces"

const foodReducer = (state: pos = { r: 15, c: 15 }, action: any) => {
    switch (action.type) {
        case "SET_FOOD_POS":
            return action.payload
        default:
            return state
    }
}

export default foodReducer