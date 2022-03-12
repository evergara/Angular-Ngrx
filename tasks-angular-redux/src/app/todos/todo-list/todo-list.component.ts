import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@redux/todo/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private _todos: Todo[];
  @Output() 
  deleteEventTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() 
  completedEventTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { 
    this._todos = [];
  }
 
  ngOnInit(): void {
  }
  
  @Input()
  set todos(todos: Todo[]) {
    if(!todos) todos=[];
    this._todos = todos;
  }

  get todos():Todo[] {
    return  this._todos;
  }

  deleteTodo(todo: Todo): void {
    this.deleteEventTodo.emit(todo);
  }

  completedTodo(todo: Todo): void {
    this.completedEventTodo.emit(todo);
  }
}
