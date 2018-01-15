import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';
import { FormsModule } from "@angular/forms";
import { TodoMockService } from '../todo-mock.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoItemComponent],
  providers:[TodoMockService],
  exports: [TodoComponent]

})
export class TodoModule { }
