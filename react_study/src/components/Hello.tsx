import React from "react";

export interface HelloProps {
    name: string,
    color: string,
    isSpecial: boolean
}

function Hello({name, color, isSpecial}: HelloProps) {
    return (
        <div>
            {isSpecial ? (
                <h1 style={{color: color}}>
                    {name}
                </h1>
            ) : null}
        </div>
    );
}

Hello.defaultProps = {
    name: "홍길동",
    color: 'black',
}

export default Hello