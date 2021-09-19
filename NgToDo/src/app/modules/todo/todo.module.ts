import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import {StoreModule} from "@ngrx/store";
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import {RouterModule} from "@angular/router";
import {todoRoutes} from "./routes";
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
    FormsModule,
//регистрируем редюсер под определенным ключом
  ]
})
export class TodoModule { }
