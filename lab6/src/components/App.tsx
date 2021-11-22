import React, { useEffect } from 'react'
import { connect } from "react-redux"

import Board from './Board'
import { setBoardSize } from '../actions'
import { setSnake } from '../actions'
import { placeFood } from '../actions'
import { pos } from "../interfaces"

const App: React.FC<{}> = (props: any) => {
    const [setSize, setSnake, placeFood, boardSize, snake, food] = [props.setSize, props.setSnake, props.placeFood, props.boardSize, props.snake as pos[], props.food as pos]

    useEffect(() => {
        setSnake([{ r: boardSize / 2, c: boardSize / 2 }])

        let newFoodPos: pos
        do {
            newFoodPos = { r: Math.floor(Math.random() * (boardSize)), c: Math.floor(Math.random() * (boardSize)) }
        } while (newFoodPos.r === boardSize / 2 && newFoodPos.c === boardSize / 2)

        placeFood(newFoodPos)

    }, [setSnake, placeFood, boardSize])

    const KeyListener = (event: any) => {

        let newSnake = [...snake]
        let newHead = { ...snake[0] }

        console.log("KEY")

        switch (event.key) {
            case "ArrowUp":
                newHead.r = snake[0].r - 1
                break
            case "ArrowRight":
                newHead.c = snake[0].c + 1
                break
            case "ArrowDown":
                newHead.r = snake[0].r + 1
                break
            case "ArrowLeft":
                newHead.c = snake[0].c - 1
                break
            default:
                return null
        }

        // check for wall collision
        if (newHead.r < 0 || newHead.c < 0 || newHead.r > boardSize - 1 || newHead.c > boardSize - 1)
            return null

        // check for snake collision
        if (snake.some(snakePart => snakePart.r === newHead.r && snakePart.c === newHead.c))
            return null

        // add new head
        newSnake.unshift({ ...newHead })

        // check if food is eaten
        if (newHead.r === food.r && newHead.c === food.c) {
            let foodPosValid = true
            let newFoodPos: pos

            do {
                newFoodPos = { r: Math.floor(Math.random() * (boardSize)), c: Math.floor(Math.random() * (boardSize)) }

                foodPosValid = snake.some(snakePart => snakePart.r === newFoodPos.r && snakePart.c === newFoodPos.c)
                    ? false
                    : true

            } while (!foodPosValid)

            placeFood(newFoodPos)

        }
        else // pop tail if food is not eaten
        { newSnake.pop() }

        setSnake(newSnake)
    }

    useEffect(() => {
        document.addEventListener('keydown', KeyListener)

        return (() => document.removeEventListener('keydown', KeyListener))
    }, [snake])

    return (
        <div className="container" style={{ marginTop: "10px" }}>
            <div className="d-flex justify-content-center align-items-center">
                <Board />
            </div>
            <div className="mt-3">
                <button className="btn btn-dark me-3" onClick={() => setSize(1)}>Small</button>
                <button className="btn btn-dark me-3" onClick={() => setSize(1.5)}>Medium</button>
                <button className="btn btn-dark me-3" onClick={() => setSize(2)}>Large</button>

            </div>
        </div>
    )
}

const mapStateToProps = (state: { snake: pos[], boardSize: number, food: pos }) => {
    return { snake: state.snake, boardSize: state.boardSize, food: state.food }
}

export default connect(mapStateToProps, { placeFood: placeFood, setSnake: setSnake, setSize: setBoardSize })(App)
