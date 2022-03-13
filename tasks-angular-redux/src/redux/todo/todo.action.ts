import { Action } from "@ngrx/store"
import { Todo } from "./todo.model";

export const TODO_ADD = '[Todo] add'
export const TODO_REMOVE = '[Todo] remove'

export class TodoAddAction implements Action{
    readonly type = TODO_ADD;

    constructor(public payload: Todo){}
}

export class TodoRemoveAction implements Action{
    readonly type = TODO_REMOVE;

    constructor(public payload: string){}
}


export type TodoAllActions = TodoAddAction | TodoRemoveAction;