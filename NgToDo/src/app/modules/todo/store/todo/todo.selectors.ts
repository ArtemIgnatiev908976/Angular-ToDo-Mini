import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TODO_REDUCER_NODE, TodoState} from "./todo.reducer";

export const todoFeatureSelector = createFeatureSelector<TodoState>(TODO_REDUCER_NODE);   //селектор который извлекает первый объект из хранилища

export const todoListSelector = createSelector(
  todoFeatureSelector,
  state => state.todoList
);
