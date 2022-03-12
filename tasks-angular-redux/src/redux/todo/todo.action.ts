import { Action } from "@ngrx/store"
import { Todo } from "./todo.model";

export const TODO_ADD = '[Todo] add'

export class TodoAddAction implements Action{
    readonly type = TODO_ADD;

    constructor(public payload: Todo){}
}


export type TodoAllActions = TodoAddAction