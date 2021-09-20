import {Todo} from "../../model/todo";
import {TodoActions, todoActionsType} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo'; //константа под хранение редюсера

export interface TodoState{
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState ={
  idIncrement: 1,
  todoList: []
}



export const todoReducer = (state=initialState, action: TodoActions) =>{

  switch (action.type){
    case todoActionsType.create:
      return{
        ...state,
        idIncrement: state.idIncrement+1,
        todoList:[
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]
      };

    case todoActionsType.toggle:
      return{
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
          ...todo,
          completed: !todo.completed
        } : todo)
      };


    case todoActionsType.delete:
      return{
        ...state,
        todoList: state.todoList.filter(todo => todo.id !==action.payload.id),  // избавляемся от записей которыые совпадают по id
      }
    default:
      return state;
  }

} // редюсер который принимает стейт, акшины и возвращает  стейт
