import React from 'react'

const rows = (nRows: number, nCols: number) => {
    return (
        Array.from(new Array(nRows)).map((_, rowNo) => (
            <tr key={rowNo}>
                {cols(rowNo, nCols)}
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
    nRows: number,
    nCols: number
}> = ({ nRows, nCols }) => {
    return (
        <div>
            <table className="chess-board">
                <tbody>
                    {rows(nRows, nCols)}
                </tbody>
            </table>
        </div>
    )
}

export default Board