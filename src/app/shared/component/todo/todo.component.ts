import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodos } from '../../models/todo';
import { todoArr } from '../../const/todoConst';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  isInEditMode:boolean=false
todosArr : Array<ITodos>= todoArr

@ViewChild('todoItem') todoItem !: ElementRef
  
trackByTodo(index:number , trackByTodo:ITodos){
  return trackByTodo
}
  constructor(private _snackBar : MatSnackBar) { }

  ngOnInit(): void {

   
  }

  onTodoAdd(){

    if(this.todoItem.nativeElement.value.length > 0){

      let todoObj : ITodos = {
      todoItem : this.todoItem.nativeElement.value,
      todoId :Date.now().toString()
    }
    console.log(todoObj)
    this.todoItem.nativeElement.value = ''
    this.todosArr.push(todoObj)
   

    this._snackBar.open('New TodoItem Added Successfully !', 'close', {
      verticalPosition : 'top',
      horizontalPosition : 'center',
      duration : 3000
    })
    }

    
    
  }
  
}
