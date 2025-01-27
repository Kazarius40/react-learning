import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightA = () => {
    const {changeTheme} = useContext(MyContext);

    return (
        <>
            <button onClick={() => changeTheme('light')}>Light</button>
            <button onClick={() => changeTheme('dark')}>Dark</button>
        </>
    );
};