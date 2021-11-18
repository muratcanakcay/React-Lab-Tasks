import { pos } from "../interfaces"

// action makers
export const setBoardSize = (val: number) => {
    return {
        type: "SET_BOARD",
        payload: val
    }
}

export const setSnake = (snake: pos[]) => {
    return {
        type: "SET_SNAKE_POS",
        payload: snake
    }
}

export const placeFood = (food: pos) => {
    return {
        type: "SET_FOOD_POS",
        payload: food
    }
}

