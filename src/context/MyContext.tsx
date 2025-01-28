import {createContext} from "react";

type MyContextType = {
    theme: string;
    changeTheme: (theme: string) => void;
}

const defaultValue = {
    theme: '',
    changeTheme: () => {}
};

export const MyContext = createContext<MyContextType>(defaultValue)