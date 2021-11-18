import React, { useEffect } from 'react'
import { connect } from "react-redux"

import Board from './Board'
import { setBoardSize } from '../actions'
import { setSnake } from '../actions'
import { pos } from "../interfaces"

const App: React.FC<{}> = (props: any) => {
    const [setSize, setSnake, boardSize, snake] = [props.setSize, props.setSnake, props.boardSize, props.snake as pos[]]

    useEffect(() => {
        setSnake([{ r: boardSize / 2, c: boardSize / 2 }])
    }, [setSnake, boardSize])

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

        // add new head
        newSnake.unshift({ ...newHead })

        // TODO: check for food eaten here:
        // ...
        // if food is eaten don't pop the tail
        newSnake.pop()

        setSnake(newSnake)
    }

    useEffect(() => {
        document.addEventListener('keydown', KeyListener)

        return (() => document.removeEventListener('keydown', KeyListener))
    }, [snake])

    return (
        <div className="container" style={{ marginTop: "10px" }}>
            <div className="d-flex justify-content-center align-items-center">
                <Board size={boardSize} snake={snake} />
            </div>
            <div className="mt-3">
                <button className="btn btn-dark me-3" onClick={() => setSize(1)}>Small</button>
                <button className="btn btn-dark me-3" onClick={() => setSize(1.5)}>Medium</button>
                <button className="btn btn-dark me-3" onClick={() => setSize(2)}>Large</button>

            </div>
        </div>
    )
}

const mapStateToProps = (state: { snake: pos[], boardSize: number }) => {
    return { snake: state.snake, boardSize: state.boardSize }
}

export default connect(mapStateToProps, { setSnake: setSnake, setSize: setBoardSize })(App)
