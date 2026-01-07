import { Component, OnInit } from '@angular/core';
import { ITodos } from '../../models/todo';
import { todoArr } from '../../const/todoConst';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  isInEditMode:boolean=false
todosArr : Array<ITodos>= todoArr
trackByTodo(index:number , trackByTodo:ITodos){
  return trackByTodo
}
  constructor() { }

  ngOnInit(): void {
  }

}
