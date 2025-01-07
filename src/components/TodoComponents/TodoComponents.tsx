import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";

export const TodoComponents = ()=>{
    const [users, setUsers] = useState([]);
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(json => {
        setUsers(json);

    });
    return (
        console.log(users)
    )
}