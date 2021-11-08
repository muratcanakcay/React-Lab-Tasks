import React from "react";

const NextButton: React.FC<{
    warnings: any[]
    callback: () => void
}> = ({ warnings, callback }) => {
    const isDisabled = (): boolean => !warnings.every(el => Object.keys(el).length === 0)

    return (
        <button className='btn btn-dark'
            disabled={isDisabled()}
            onClick={(e) => !isDisabled() && callback()}>Next</button>
    )
}

export default NextButton;