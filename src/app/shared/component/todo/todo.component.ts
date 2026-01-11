import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodos } from '../../models/todo';
import { todoArr } from '../../const/todoConst';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

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
  constructor(
    private _snackBar : MatSnackBar,
    private _matDialog :MatDialog
  ) { }

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

  onRemove(id : string){

    let matConfig = new MatDialogConfig()
    matConfig.width = '500px'
    matConfig.disableClose = true
    let matDialogRef = this._matDialog.open(GetConfirmComponent, matConfig)

    matDialogRef.afterClosed()
      .subscribe(res =>{
        if(res){
          let getIndex = this.todosArr.findIndex(t => t.todoId === id)
          let item = this.todosArr.splice(getIndex, 1)

          this._snackBar.open(`The todoItem ${item[0].todoItem} is Removed Successfully !`, 'close', {
            verticalPosition : 'top',
            horizontalPosition : 'center',
            duration : 3000
          })
        }
      })

  }
  
}
