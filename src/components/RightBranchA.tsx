import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightBranchA = () => {

    const {counterValue, increment} =
        useContext(MyContext);
    return (
        <div>RightBranch - A
            <button onClick={() => {
                increment(counterValue);
            }}>click me to increment counter in LBA</button>
        </div>
    );
};