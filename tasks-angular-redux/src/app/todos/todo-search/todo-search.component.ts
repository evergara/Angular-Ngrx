import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Todo } from '@redux/todo/todo.model';
import { TodostateService } from '../shared/todostate.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.scss']
})
export class TodoSearchComponent implements OnInit {
  
  private todos$: Observable<Todo[]>;
  private searchTodo = new Subject<string>();

  constructor(private serviceTodo: TodostateService) { 
    this.todos$ = new Observable<Todo[]>();
  }

  ngOnInit(): void {
  }

  public get todos(): Observable<Todo[]> {
    return this.todos$;
  }

  search(term: string): void {
    this.searchTodo.next(term);
  }
  
  searchOnInit(): void {
    /*
    this.todos$ = this.searchTodo.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.serviceTodo.searchTodo(term)),
    );
    */
  }
}
