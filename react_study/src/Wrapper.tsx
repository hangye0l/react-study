import React from "react";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({children}: WrapperProps) => {
    const style = {
        border: '2px solid black',
        padding: '16px',
        marginTop: '20px',
        margin: '20px auto',
        width: '500px',
    };
    return(
        <div style={style}>
            {children}
        </div>
    );
}

export default Wrapper