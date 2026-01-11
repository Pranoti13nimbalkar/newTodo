import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatButtonModule}   from '@angular/material/button';
import{MatIconModule}   from '@angular/material/icon';
import{MatCardModule}   from '@angular/material/card';
import{MatSnackBarModule}   from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './shared/component/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
