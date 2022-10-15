import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from 'src/todo-module/Entities/TodoModel';
import { TodoDto } from 'src/todo-module/DTO/TodoDto';
import { json } from 'stream/consumers';
import { ArrayUniqueIdentifier } from 'class-validator';

@Injectable()
export class TodoServiceService {
   // todos: TodoModel[] = [] ;
   private todos: Array<TodoModel> = []; 

    getTodos(): Array<TodoModel>{
      return this.todos;
    }
 
    getTodo(id: number) :TodoModel {
      return this.todos.find((todo) => todo.id == id);
    }
  
    addtododto ( newtodo:  TodoDto):TodoModel{
        const todo = new TodoModel();
        todo.name = newtodo.name;
        todo.description = newtodo.description;
        this.todos.push(todo);
        return todo;
        /*const todo = new TodoModel();
        const { name, description } = newtodo;
        todo.name = name;
        todo.description = description;
        if (this.todos.length) {
            todo.id = this.todos[this.todos.length - 1].id + 1;
        }
        else { todo.id = 1; }
        this.todos.push(todo);

        return todo;*/
    }



    deletetodo(id:number){
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index > 0) {
            this.todos.splice(index, 1);
        }
        else { throw new NotFoundException() }
        return {
            msg: 'le todo est  supprimé'
        }
    }
}

