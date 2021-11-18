import React from 'react'
//import { connect } from "react-redux"
import "./Board.css"
//import { setSnake } from '../actions'
import { pos } from '../interfaces'

const rows = (size: number, snake: pos[]) => {
    return (
        Array.from(new Array(size)).map((_, rowNo) => (
            <tr key={rowNo}>
                {cols(rowNo, size, snake)}
            </tr>
        )
        ))
}

const cols = (rowNo: number, size: number, snake: pos[]) => {
    return (
        Array.from(new Array(size)).map((_, colNo) => (
            <td key={rowNo + colNo} className={checkSnake(rowNo, colNo, snake)}></td >
        )
        ))
}

const checkSnake = (rowNo: number, colNo: number, snake: pos[]) => {

    return snake.some(snakePart => snakePart.r === rowNo && snakePart.c === colNo)
        ? "snake"
        : (rowNo + colNo) % 2
            ? "light"
            : "dark"
}

const Board: React.FC<{
    size: number,
    snake: pos[]
}> = ({ size, snake }) => {

    return (
        <div>
            <table className="chess-board border border-4 border-primary">
                <tbody>
                    {rows(size, snake)}
                </tbody>
            </table>
        </div>
    )
}

export default (Board)