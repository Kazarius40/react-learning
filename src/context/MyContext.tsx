import {createContext} from "react";

type MyContextType = {
    counterValue: number;
    // increment: (obj: number) => void;
    increment: () => void;
}
export const init = {
    counterValue: 0,
    increment: () => {}
};
export const MyContext = createContext<MyContextType>(init);