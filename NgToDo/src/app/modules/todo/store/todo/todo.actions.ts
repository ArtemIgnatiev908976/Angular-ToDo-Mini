import {Action} from "@ngrx/store";
export enum todoActionsType  {
  create ='[TODO] create todo item'    //когда будут происходить action в консоли я буду знать какой модуль отвечат за них
}



export  class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload:{name: string}) {

  }
}


export type TodoActions = TodoCreateAction;
