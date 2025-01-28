import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";
import "./left.css"

export const LeftA = () => {
    const {theme} = useContext(MyContext);

    return (
        <div className={theme}>
            Тут відображається ось ця тема: {theme}
        </div>
    );
};