import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatButtonModule}   from '@angular/material/button';
import{MatIconModule}   from '@angular/material/icon';
import{MatCardModule}   from '@angular/material/card';
import{MatSnackBarModule}   from '@angular/material/snack-bar';

import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './shared/component/todo/todo.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
