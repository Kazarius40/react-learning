import './App.css'
import {Left} from "./components/left/Left.tsx";
import {Right} from "./components/right/Right.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    const [themeColor, setThemeColor] = useState('')


    return (
        <>
            <MyContext.Provider value={{theme: themeColor, changeTheme: (theme) => setThemeColor(theme)}}>
            {/*<MyContext.Provider value={{theme: themeColor, changeTheme: setThemeColor}}>*/}
                <Left/>
                <Right/>
            </MyContext.Provider>
        </>
    )
}

export default App
