import {simpsons} from "../../data/SimpsonsList.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";
import {INameList} from "../../models/INameList.ts";


export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value: INameList, index: number) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    )
}