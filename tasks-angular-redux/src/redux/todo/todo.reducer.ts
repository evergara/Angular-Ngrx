import { Action, State } from "@ngrx/store";
import { AppState } from "@redux/app.state";
import { Todo } from "@redux/todo/todo.model";
import { TodoAllActions, TODO_ADD } from "./todo.action";

const initialTodoState: Todo[] = [];

export function todoReducer(currentState: Todo[] = initialTodoState, action: TodoAllActions): Todo[] {
    if(!action.type) return currentState;
    
    switch(action.type){
        case TODO_ADD:{
            return [
                ...currentState,
                action.payload,
            ];
        }
        default: {
            return currentState;
        }
    }
}