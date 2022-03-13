import { Action, State } from "@ngrx/store";
import { AppState } from "@redux/app.state";
import { Todo } from "@redux/todo/todo.model";
import { TodoAllActions, TODO_ADD, TODO_REMOVE, TODO_TOGGLE , TODO_UPDATE} from "./todo.action";

const initialTodoState: Todo[] = [];

export function todoReducer(currentState: Todo[] = initialTodoState, action: TodoAllActions): Todo[] {
    if(!action.type) return currentState;
    
    switch(action.type){
        case TODO_ADD: {
            return [
                ...currentState,
                action.payload,
            ];
        }
        case TODO_REMOVE: {
            return currentState.filter((todo) => {
                return todo.id !== action.payload;
            });
        }
        case TODO_TOGGLE: {
            return currentState.map((todo) => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }else{
                    return todo;
                }
            });
        }
        case TODO_UPDATE: {
            return currentState.map((todo) => {
                if(todo.id === action.id){
                    return {
                        ...todo,
                        title: action.title
                    };
                }else{
                    return todo;
                }
            });
        }
        default: {
            return currentState;
        }
    }
}