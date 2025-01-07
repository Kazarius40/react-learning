// Task 1 ohm4AivCEBv
// https://jsonplaceholder.typicode.com/todos - тут масив даних. ознайомтесь з ним для початку
//     Створити компонент TodoComponent який буде містити інформацію про окремий об'єкт з масиву.
// Створити компонент  TodoComponents в якому відбувається ітерація масиву даних отриманих з апі.
//     Кореневим компонентом є App


import {TodoComponents} from "./components/TodoComponents/TodoComponents.tsx";

function App() {

    return (
        <>
            <TodoComponents/>
        </>
    )
}

export default App
