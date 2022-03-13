import { TodoAddAction, TodoRemoveAction, TodoToggleAction, TodoUpdateAction } from '@redux/todo/todo.action';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { Todo } from '@redux/todo/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodostateService {

  constructor(private store: Store<AppState>) { }

  addTodo(todo:Todo){
    this.store.dispatch(new TodoAddAction(todo));
  }

  deleteTodo(todo: Todo){
    console.log(todo);
     this.store.dispatch(new TodoRemoveAction(todo.id));
  }

  updateTodo(id: string, title: string){
     this.store.dispatch(new TodoUpdateAction(id, title));
  }

  toggleTodo(todo: Todo){
    console.log(todo);
     this.store.dispatch(new TodoToggleAction(todo.id));
  }

  searchTodo(payload: string){
    return '';
  }

  allTodo(): Observable<Array<Todo>> {
     return this.store.select('todos');
  }
}
