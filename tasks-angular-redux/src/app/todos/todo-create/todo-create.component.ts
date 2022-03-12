import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  @Output() createTodo: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.emitCreateTodo(title);
  }
  
  emitCreateTodo(title: string) {
    this.createTodo.emit(title);
  }
}
