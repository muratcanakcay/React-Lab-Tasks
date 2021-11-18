import React, { useEffect } from 'react'
import { connect } from "react-redux"

import Board from './Board'
import { setBoardSize } from '../actions'
import { setSnake } from '../actions'

const App: React.FC<{}> = (props: any) => {
    const [setSize, setSnake, boardSize, snake] = [props.setSize, props.setSnake, props.boardSize, props.snake]

    useEffect(() => {
        setSnake([{ r: boardSize / 2, c: boardSize / 2 }])
    }, [setSnake, boardSize])

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

const mapStateToProps = (state: any) => {
    return { snake: state.snake, boardSize: state.boardSize }
}

export default connect(mapStateToProps, { setSnake: setSnake, setSize: setBoardSize })(App)
