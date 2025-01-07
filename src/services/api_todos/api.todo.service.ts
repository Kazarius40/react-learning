import {IToDoResponse} from "../../models/IToDoResponse/IToDoResponse.ts";
const url = import.meta.env.VITE_API_DUMMYJSON_URL;

export const getToDos = async (): Promise<IToDoResponse> => {
  return  await fetch(url + '/todos')
        .then(res => res.json())
}