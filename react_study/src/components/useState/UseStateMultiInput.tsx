import React, {useState} from "react";


const UseStateMutiInput = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    };

    return (
        <div style={{marginTop: 50, marginLeft: 30}}>
            <input style={{marginRight: 15, marginBottom: 20}} name="name" placeholder="이름" onChange={onChange}
                   value={name}/>
            <input style={{marginRight: 15, marginBottom: 20}} name="nickname" placeholder="닉네임" onChange={onChange}
                   value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <h1>
                이름 : {name}({nickname})
            </h1>
        </div>
    );

}

export default UseStateMutiInput