import React from "react";

interface HelloProps{
    name: String
}

function  Hello({name}: HelloProps){
    return (
        <h1>안녕하세요, {name} 님</h1>
    );
}

Hello.defaultProps = {
    name: "홍길동"
}

export default Hello