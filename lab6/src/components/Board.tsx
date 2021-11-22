import React from 'react'
import { connect } from "react-redux"
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

const Board: React.FC<{}> =
    (props: any) => {

        const [boardSize, snake, food] = [props.boardSize, props.snake as pos[], props.food as pos]

        return (
            <div>
                <table className="board">
                    <tbody>
                        {rows(boardSize, snake, food)}
                    </tbody>
                </table>
            </div>
        )
    }

const mapStateToProps = (state: { snake: pos[], boardSize: number, food: pos }) => {
    return { snake: state.snake, boardSize: state.boardSize, food: state.food }
}

export default connect(mapStateToProps)(Board)