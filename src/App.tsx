// Task 2 q2faxfR
// https://dummyjson.com/todos - тут масив даних. ознайомтесь з ним для початку
// Створити компонент TodoComponent який буде містити інформацію про окремий об'єкт з масиву.
// Створити компонент TodoComponents в якому відбувається ітерація масиву даних отриманих з апі.
// Кореневим компонентом є App


import './App.css'
import {TodoComponents} from "./components/TodoComponents/TodoComponents.tsx";

function App() {

    return (
        <>
            <TodoComponents/>
        </>
    )
}

export default App
