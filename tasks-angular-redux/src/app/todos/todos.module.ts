import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent,
    TodoSearchComponent,
    TodoDetailComponent,
    TodoCreateComponent,
    TodoFilterComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }
