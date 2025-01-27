import './App.css'
import {Left} from "./components/Left.tsx";
import {Right} from "./components/Right.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useContext, useState} from "react";

function App() {
    const {theme} =useContext(MyContext);
    const [themeColor, setThemeColor] = useState(theme)

    return (
        <>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (theme: string) => {
                    setThemeColor(theme)
                }
            }}>
                <Left/>
                <Right/>
            </MyContext.Provider>
        </>
    )
}
export default App
