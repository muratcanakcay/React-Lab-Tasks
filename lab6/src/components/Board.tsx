import React from 'react'
//import { connect } from "react-redux"
import "./Board.css"
//import { setSnake } from '../actions'
import { pos } from '../interfaces'

const rows = (size: number, snake: pos[], food: pos) => {
    return (
        Array.from(new Array(size)).map((_, rowNo) => (
            <tr key={rowNo}>
                {cols(rowNo, size, snake, food)}
            </tr>
        )
        ))
}

const cols = (rowNo: number, size: number, snake: pos[], food: pos) => {
    return (
        Array.from(new Array(size)).map((_, colNo) => (
            <td key={rowNo + colNo} className={checkSnake(rowNo, colNo, snake, food)}></td >
        )
        ))
}

const checkSnake = (rowNo: number, colNo: number, snake: pos[], food: pos) => {

    return food.r === rowNo && food.c === colNo
        ? "food"
        : snake.some(snakePart => snakePart.r === rowNo && snakePart.c === colNo)
            ? "snake"
            : (rowNo + colNo) % 2
                ? "light"
                : "dark"
}

const Board: React.FC<{
    size: number,
    snake: pos[]
    food: pos
}> = ({ size, snake, food }) => {

    return (
        <div>
            <table className="chess-board border border-4 border-primary">
                <tbody>
                    {rows(size, snake, food)}
                </tbody>
            </table>
        </div>
    )
}

export default (Board)