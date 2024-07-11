import React, {useState} from "react";
import Hello, {HelloProps} from "../components/Hello";
import Wrapper from "../components/Wrapper";
import User from "../components/User"

const ListPage = () => {
    const [name, setName] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [isSpecial, setIsSpecial] = useState<boolean>(false);
    const [items, setItmes] = useState<HelloProps[]>(
        [{
            name: "김의수",
            color: 'black',
            isSpecial: true,
        }]
    );

    const setNameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }


    const setColorHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const setCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSpecial(e.target.checked)
    }

    const itemRegister = () => {
        const newItem: HelloProps = {
            name,
            color,
            isSpecial,
        };
        setItmes([...items, newItem]);
        // 입력 필드 초기화
        setName("");
        setColor("");
        setIsSpecial(false);
    }

    return(
        <>
            <Wrapper>
                {items.map((item) => (
                    <Hello
                        name={item.name}
                        color={item.color}
                        isSpecial={item.isSpecial}
                    />
                ))}
            </Wrapper>


            <label aria-label="이름">
                <input
                    value = {name}
                    placeholder = {"이름 입력"}
                    onChange={setNameHandle}
                    style={{width: 150, marginRight: 15}}
                />
            </label>
            <label aria-label="색">
                <input
                    value = {color}
                    placeholder = {"색상 입력"}
                    onChange={setColorHandle}
                    style={{width: 150, marginRight: 15}}
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isSpecial}
                    onChange={setCheck}
                />
                {isSpecial ? '보여준다' : '안보여준다'}
            </label>
            <button onClick={itemRegister}>추가</button>
        </>
    );

}

export default ListPage