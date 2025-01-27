import {createContext} from "react";

type MyContextType = {
    theme: string;
    changeTheme: (theme: string) => void;
}

export const defaultValue = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme);
    }
};

export const MyContext = createContext<MyContextType>(defaultValue)