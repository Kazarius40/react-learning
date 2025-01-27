import './App.css'
import {Left} from "./components/left/Left.tsx";
import {Right} from "./components/right/Right.tsx";
import {defaultValue, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    // const {theme} =useContext(MyContext);
    const [themeColor, setThemeColor] = useState(defaultValue.theme)


    return (
        <>
            {/*<MyContext.Provider value={{theme: themeColor, changeTheme: (theme: string) => setThemeColor(theme)}}>*/}

            {/*А можна і скорочено написати - в чому різниця?*/}
            <MyContext.Provider value={{theme: themeColor, changeTheme: setThemeColor}}>
                <Left/>
                <Right/>
            </MyContext.Provider>
        </>
    )
}

export default App
