import React from 'react'

const noRows = 12
const noColumns = 12

const rows = () => {
    return (
        Array.from(new Array(noRows)).map((_, r) => (
            <tr>
                {cols(r)}
            </tr>
        )
        ))
}

const cols = (r: number) => {
    return (
        Array.from(new Array(noColumns)).map((_, c) => (
            <td className={(c + r) % 2 ? "light" : "dark"}></td>
        )
        ))
}



const Board: React.FC = () => {
    return (
        <div>
            <table className="chess-board">
                <tbody>
                    {rows()}
                </tbody>
            </table>
        </div>
    )
}

export default Board