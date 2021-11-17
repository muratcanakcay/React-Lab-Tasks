import React from 'react'
import { connect } from "react-redux"

import Board from './Board'
import { setBoardSize } from '../actions'



const App = (props: any) => {
    console.log(props.nRows)

    return (
        <div className="container" style={{ marginTop: "10px" }}>
            <div className="d-flex justify-content-center align-items-center">
                <Board nRows={props.nRows} />
            </div>
            <div className="mt-3">
                <button className="btn btn-dark me-3" onClick={() => props.setBoardSize(1)}>Small</button>
                <button className="btn btn-dark me-3" onClick={() => props.setBoardSize(1.5)}>Medium</button>
                <button className="btn btn-dark me-3" onClick={() => props.setBoardSize(2)}>Large</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return { nRows: state.nRows }
}

export default connect(mapStateToProps, { setBoardSize: setBoardSize })(App)
