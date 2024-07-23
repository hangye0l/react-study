import React from "react";

export interface UserProps {
    name: string,
    color: string,
    isSpecial: boolean
}

function User({name, color, isSpecial}: UserProps) {
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

User.defaultProps = {
    name: "홍길동",
    color: 'black',
}

export default User