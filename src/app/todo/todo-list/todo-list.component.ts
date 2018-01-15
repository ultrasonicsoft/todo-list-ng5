import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo-model';
import { TodoMockService } from '../../todo-mock.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  allTodos : TodoModel[];

  constructor(private todoMockService:TodoMockService) { }

  ngOnInit() {
    this.allTodos = this.todoMockService.getAllTodos();
  }

}
