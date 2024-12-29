import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

    return (
        <>
            <MyComponent text={'Hi, I\'m Amazing!'}/>
            <MyComponent text={'Hello World!'}/>
            {/*{MyComponent({text: 'Hello World'})}*/}
        </>
    )
}

export default App
