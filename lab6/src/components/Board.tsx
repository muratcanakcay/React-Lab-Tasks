import React from 'react'
import "./Board.css"

const rows = (nRows: number) => {
    return (
        Array.from(new Array(nRows)).map((_, rowNo) => (
            <tr key={rowNo}>
                {cols(rowNo, nRows)}
            </tr>
        )
        ))
}

const cols = (rowNo: number, nCols: number) => {
    return (
        Array.from(new Array(nCols)).map((_, colNo) => (
            <td key={rowNo + colNo} className={(rowNo + colNo) % 2 ? "light" : "dark"}></td>
        )
        ))
}

const Board: React.FC<{
    nRows: number
}> = ({ nRows }) => {
    return (
        <div>
            <table className="chess-board border border-secondary">
                <tbody>
                    {rows(nRows)}
                </tbody>
            </table>
        </div>
    )
}

export default Board