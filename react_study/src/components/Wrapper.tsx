import React from "react";
import styled from "styled-components";

interface WrapperProps {
    children: React.ReactNode
}

interface StyleDivProps {
    borderColor: string
}

const StyleDiv = styled.div<StyleDivProps>`
    border: 2px solid ${props => props.borderColor};
    margin: 20px auto;
    width: 601px;
    height: 401px;
    padding: 48px 75px 49px 76px;
    gap: 10px;

`
const Wrapper = ({children}: WrapperProps) => {
    return(
        <StyleDiv borderColor="#00000C">
            {children}
        </StyleDiv>
    );
}

export default Wrapper
