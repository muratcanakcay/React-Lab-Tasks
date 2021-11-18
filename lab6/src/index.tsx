import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { setSnake } from './actions'
import { pos } from './interfaces'

import App from "./components/App"
import reducers from "./reducers"

const store = createStore(reducers, {}, composeWithDevTools())

const KeyListener = (event: any) => {

    const state = store.getState()
    const snake = state.snake as pos[]

    switch (event.key) {
        case "ArrowUp":
            snake[0] = { r: snake[0].r - 1, c: snake[0].c }
            store.dispatch(setSnake([...snake]))
            break
        case "ArrowRight":
            snake[0] = { r: snake[0].r, c: snake[0].c + 1 }
            store.dispatch(setSnake([...snake]))
            break
        case "ArrowDown":
            snake[0] = { r: snake[0].r + 1, c: snake[0].c }
            store.dispatch(setSnake([...snake]))
            break
        case "ArrowLeft":
            snake[0] = { r: snake[0].r, c: snake[0].c - 1 }
            store.dispatch(setSnake([...snake]))
            break
        default:
    }

    return null
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

document.addEventListener('keydown', KeyListener)