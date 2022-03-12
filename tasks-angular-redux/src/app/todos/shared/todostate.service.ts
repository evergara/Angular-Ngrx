import { TodoAddAction } from './../../../redux/todo/todo.action';
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
    console.log(todo);
    this.store.dispatch(new TodoAddAction(todo));
  }

  searchTodo(payload: string){
    return '';
  }

  allTodo(): Observable<Array<Todo>> {
     return this.store.select('todos');
  }
}
