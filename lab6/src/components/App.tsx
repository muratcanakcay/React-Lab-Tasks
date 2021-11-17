import React from 'react'
import { connect } from "react-redux"

import Board from './Board'
import { setRows } from "../actions"
import { setCols } from '../actions'



const App = (props: any) => {
    console.log(props.nRows, props.nCols)

    return (
        <div className="container" style={{ marginTop: "10px" }}>
            <div className="d-flex justify-content-center align-items-center">
                <Board nRows={props.nRows} nCols={props.nCols} />
            </div>
            <div>
                <button className="btn btn-dark me-3" onClick={() => props.setRows(1)}>+ Row</button>
                <button className="btn btn-dark" onClick={() => props.setRows(-1)}>- Row</button>
            </div>
            <div className="mt-3">
                <button className="btn btn-dark me-3" onClick={() => props.setCols(1)}>+ Column</button>
                <button className="btn btn-dark" onClick={() => props.setCols(-1)}>- Column</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return { nRows: state.nRows, nCols: state.nCols }
}

export default connect(mapStateToProps, { setRows: setRows, setCols: setCols })(App)
