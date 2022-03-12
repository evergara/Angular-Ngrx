import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '@redux/todo/todo.model';
import { TodostateService } from './shared/todostate.service';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private _todos: Todo[];

  constructor(private serviceTodo: TodostateService,
              private store: Store<AppState>) { 
    this._todos = [];
  }

  ngOnInit(): void {
    this.allTodo();
  }
  
  get todos(): Todo[] {
    return  this._todos;
  }

  add(title: string): void  {
    this.serviceTodo.addTodo(this.createTodo(title));
  }

  deleteTodo(todo: Todo): void {
    console.log('......');
  }

  completedTodo(todo: Todo): void {
     console.log('......');
  }

  private createTodo(title: string): Todo {
    return {
      id: Math.random().toString(),
      title: title,
      completed: false,
      date: new Date()
    };
  }

  
  allTodo(): void {
    this.serviceTodo.allTodo().subscribe( (todos) => {
      this._todos = todos;
    });
  }
  
}
