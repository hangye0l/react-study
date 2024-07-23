import React, {useState} from "react";
import DeamHome from "./DeamHome";
import Wrapper from "../Wrapper";
import Input from "./Input";
import Checkbox from "./Checkbox";
import LoginButton from "./LoginButton";
import styles from '../styles/Login.module.scss'


function LoginPage(){
    const [inputs, setInputs] = useState({
        id: '',
        password: ''
    });
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const {id, password} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const handleLoginClick = () => {
        alert(`아이디: ${id}\n비밀번호: ${password}`);
        if (!isChecked) {
            setInputs({
                id: '',
                password: ''
            });
        }
    };

    return(
        <div className={styles.main}>
            <DeamHome/>
            <Wrapper>
                <div className={styles.form}>
                    <Input
                        name="id"
                        placeholder="이름"
                        value={id}
                        onChange={onChange}
                    />
                    <Input
                        name="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={onChange}
                    />
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        label="간편 로그인 정보 저장"
                    />
                    <div>
                        <LoginButton onClick={handleLoginClick}>
                            로그인
                        </LoginButton>
                    </div>

                    <div className={styles.links}>
                        <a href="#">회원가입</a>
                        <a href="#">계정찾기</a>
                        <a href="#">비밀번호 찾기</a>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default LoginPage