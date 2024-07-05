import React from 'react';
import Text from "./Text";
import Wrapper from "./Wrapper";
import './App.css';

function App() {
    const name1 = ["한글자", "두글자"];
    const name2 = ["세글자", "네글자", "다섯..."];

    return (
        <div className="App">
            <Wrapper>
                {name1.map((name) => (
                    <Text name={name} />
                ))}
            </Wrapper>
            {name2.map((name) => (
                <Text name={name} />
            ))}
        </div>
    );
}

export default App;
