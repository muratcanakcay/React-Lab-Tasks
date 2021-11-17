// action makers
export const setBoardSize = (val: number) => {
    return {
        type: "SET_BOARD",
        payload: val
    }
}