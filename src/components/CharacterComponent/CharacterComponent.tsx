import {INameList} from "../../models/INameList.ts";
import {ReactNode} from "react";
import './CharacterComponent.css'

interface IProps {
    item: INameList,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: IProps) => {
    return (
        <div className='border-2'>
            <h3 className='text-4xl'>{item.name} {item.surname}</h3>
            <p>{children}</p>
            <img src={item.photo} alt={item.name}/>
        </div>
    )
}