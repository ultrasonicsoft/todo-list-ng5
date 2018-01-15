import { Injectable } from '@angular/core';
import { TodoModel } from './todo/todo-model';

@Injectable()
export class TodoMockService {

  allTodos: TodoModel[] = []

  constructor() { }

  getAllTodos(){
    return this.allTodos;
  }
  addTodo(newTodo: TodoModel) {
    this.allTodos.push(newTodo);
  }
}
