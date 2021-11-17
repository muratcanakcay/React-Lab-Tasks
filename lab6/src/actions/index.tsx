// action makers

export const setRows = (val: number) => {
    return {
        type: "SET_ROWS",
        payload: val
    }
}

export const setCols = (val: number) => {
    return {
        type: "SET_COLS",
        payload: val
    }
}