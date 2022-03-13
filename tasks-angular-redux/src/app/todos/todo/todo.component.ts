import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@redux/todo/todo.model';
import { TodoUptadeDTO } from '../shared/dto/todoupdated.dto';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private _todo!: Todo;
  title:string = '';
  @Output() 
  deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() 
  completedTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() 
  updateEventTodo: EventEmitter<TodoUptadeDTO> = new EventEmitter<TodoUptadeDTO>();


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
    this.emitCompleted();
  }
  
  updateTodo(): void {
    let todoUpdateDto: TodoUptadeDTO = {
      id: this.todo.id, 
      title: this.title
    }
    this.updateEventTodo.emit(todoUpdateDto);
  }

  private emiteDelete(): void {
    this.deleteTodo.emit(this._todo);
  }

  private emitCompleted(): void {
    this.completedTodo.emit(this.todo);
  }
}
