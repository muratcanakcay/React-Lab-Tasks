import React from "react";

const Warning: React.FC<{
    warningText: string | undefined
}> = ({ warningText }) => {
    if (warningText) {
        return (
            <div style={{ color: "red" }}>
                {warningText}
            </div>
        )
    }

    return null
}

export default Warning;