import React from "react";

interface TextProps{  // Typescript는 JS에 무조건적으로 타입을 명시해줘야 되기 때문에 interface를 요구한다.
    name: String
}

function  Text({ name}: TextProps){
    return (
        <h1 >{name}</h1>
    );
}

export default Text