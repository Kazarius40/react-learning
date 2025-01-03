import {FC} from 'react';
import {INameList} from "../../models/INameList.ts";

const CharacterComponent: FC<{item: INameList}> = ({item}) => {
return (
    <>
        <h2>{item.name} {item.surname} {item.age}</h2>
        <p>{item.info}</p>
        <img src={item.photo} alt={item.name}/>
    </>
)
}

export default CharacterComponent;