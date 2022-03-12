import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@redux/todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private _todo!: Todo;
  @Output() 
  deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() 
  completedTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { 
  }
 
  ngOnInit(): void {
  }
  
  @Input()
  set todo(todo: Todo) {
    this._todo = todo;
  }

  get todo():Todo {
    return  this._todo;
  }

  delete(): void {
    this.emiteDelete();
  }

  completed(): void {
    this._todo.completed = true;
    this.emitCompleted();
  }

  private emiteDelete(): void {
    this.deleteTodo.emit(this._todo);
  }

  private emitCompleted(): void {
    this.completedTodo.emit(this.todo);
  }
}
