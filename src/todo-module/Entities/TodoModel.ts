import { TodoStatusEnum } from './TodoStatusEnum';
//import { v4 as uuidv4 } from 'uuid';
export class TodoModel {
   // id: string = uuidv4();
   id:number;
    name: string;
    description: string;
    createAt: string = Date();
    status: TodoStatusEnum = TodoStatusEnum.waiting;
  }