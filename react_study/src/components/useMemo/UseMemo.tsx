import React, { useMemo, useState} from "react";
import {filterUser, User} from "./Util";

interface UseMemoProps {
    type: "all" | "active" | "completed";
    users: User[]
}

const UseMemo = ({ type, users }: UseMemoProps) => {
    const [input, setInput] = useState("")

    // const userTodos = useMemo(() => {
    //     return filterUser(users, type);
    // }, [users]);

    const userTodos = filterUser(users,type);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput((input)=>(input=e.target.value));
    }

    return (
        <div>
            <div>
                <input value={input} onChange={onChange}/>
            </div>
            <ul>
                {userTodos.map((user) => (
                    <li key={user.id}>
                        {user.completed ? <s>{user.name}</s> : user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UseMemo;