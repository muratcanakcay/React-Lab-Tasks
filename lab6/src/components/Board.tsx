import React from 'react'


const rows = () => {
    return (
        Array.from(new Array(8)).map((_, i) => (
            <tr>
                {cols()}
            </tr>
        )
        ))
}

const cols = () => {
    return (
        Array.from(new Array(8)).map((_, i) => (
            <td className={i % 2 ? "light" : "dark"}></td>
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