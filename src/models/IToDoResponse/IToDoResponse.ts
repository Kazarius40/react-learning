import {IToDo} from "../ToDo/IToDo.ts";

export interface IToDoResponse {
  todos: IToDo[];
  total: number;
  skip: number;
  limit: number;
}