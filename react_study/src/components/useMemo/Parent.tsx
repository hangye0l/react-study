import React, { useState } from "react";
import UseMemo from "./UseMemo";
import {createUser} from "./Util";

const ParentUseMemo = () => {
    const [type, setType] = useState<"all" | "active" | "completed">("all");

    const users = createUser();

    const handleChangeType = (change: "all" | "active" | "completed") => {
        setType(change);
    };

    return (
        <div>
            <button onClick={() => handleChangeType && handleChangeType("all")}>
                All
            </button>
            <button onClick={() => handleChangeType && handleChangeType("active")}>
                Active
            </button>
            <button onClick={() => handleChangeType && handleChangeType("completed")}>
                Completed
            </button>
            <UseMemo users={users} type={type} />
        </div>
    );
};

export default ParentUseMemo;
