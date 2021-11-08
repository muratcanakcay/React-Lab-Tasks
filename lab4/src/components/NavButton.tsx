import React from "react";

const NavButton: React.FC<{
    buttonText: string
    warnings: any[]
    callback: () => void
}> = ({ buttonText, warnings, callback }) => {
    const isDisabled = (): boolean => !warnings.every(el => Object.keys(el).length === 0)

    return (
        <button className='btn btn-dark mx-1'
            disabled={isDisabled()}
            onClick={(e) => !isDisabled() && callback()}>{buttonText}</button>
    )
}

export default NavButton;