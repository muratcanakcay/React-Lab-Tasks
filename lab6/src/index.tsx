import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'

import App from "./components/App"
import reducers from "./reducers"

const store = createStore(reducers, {}, composeWithDevTools())
//document.body.style.cursor = "hand"
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)