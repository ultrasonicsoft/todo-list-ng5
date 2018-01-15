import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo-model';
import { TodoMockService } from '../../todo-mock.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  description: string = '';

  // private todoMockService: TodoMockService

  // constructor(_todoMockService: TodoMockService) {
  //   this.todoMockService = _todoMockService;
  // }

  
  constructor(private todoMockService: TodoMockService) {    
  }

  ngOnInit() {
    
  }

  addTodo() {
    // alert('add called..' + this.description);

    let newTodo = new TodoModel();
    newTodo.description = this.description;
    newTodo.isDone = false;

    this.todoMockService.addTodo(newTodo);
  }

}
