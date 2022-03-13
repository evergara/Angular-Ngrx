import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '@redux/todo/todo.model';
import { TodostateService } from './shared/todostate.service';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { TodoUptadeDTO } from './shared/dto/todoupdated.dto';

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
    this.serviceTodo.deleteTodo(todo)
  }

  updateTodo(data: TodoUptadeDTO): void {
    this.serviceTodo.updateTodo(data.id, data.title)
  }
  
  completedTodo(todo: Todo): void {
    this.serviceTodo.toggleTodo(todo)
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
