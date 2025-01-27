import './App.css'
import {UsersComponent} from "./components/UsersComponent.tsx";

const baseUrl = import.meta.env.VITE_BASE_URL;


function App() {
    return (
        <>
            <UsersComponent baseUrl={baseUrl}/>
        </>
    )
}

export default App
