import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import {StoreModule} from "@ngrx/store";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer) //регистрируем редюсер под определенным ключом
  ]
})
export class TodoModule { }
