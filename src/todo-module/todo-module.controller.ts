import { Body, Controller, Get, Post, Delete, Param, NotFoundException, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { TodoModel } from './Entities/TodoModel';
import { TodoDto } from './DTO/TodoDto';
@Controller('todo')

export class TodoModuleController {
    constructor() {

        this.todos = [];
    }
    todos: TodoModel[];
    @Get('')
    getTodos() {
        return this.todos;
    }
    // Recuperer avec  id ,name 
    // @Post()
    // addtodo(
    //  @Body('id') id:string,
    //  @Body('name')name:string,

    //  ){
    //console.log(id,name);
    //  console.log("ADD TODO")
    //}



    @Post()
    addtodo(
        //SANS DTO
        //   @Body() newtodo :ModelTodo 
        // if (this.todos.length){
        //   newtodo.id=this.todos[this.todos.length -1].id  +1;
        // }
        // else{newtodo.id=1;}
        // this.todos.push(newtodo);

        // return newtodo ;
        @Body() newtodo: TodoDto
    ) {
        const todo = new TodoModel();
        const { name, description } = newtodo;
        todo.name = name;
        todo.description = description;
        if (this.todos.length) {
            todo.id = this.todos[this.todos.length - 1].id + 1;
        }
        else { todo.id = 1; }
        this.todos.push(todo);

        return todo;
    }

    @Delete(':id')
    deletetodo(
        @Param('id') id
    ) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index > 0) {
            this.todos.splice(index, 1);
        }
        else { throw new NotFoundException() }
        return {
            msg: 'le todo est  supprimé'
        }

    }


    //SANS DTO
    //@Put(':id')
    //updatetodo(
    //@Param(':id') id,
    // @Body() todo:Partial<TodoModel>

    // ){console.log(id,todo)
    // return 'update todo';
    // }

    //}

    @Put(':id')
    updatetodo(
        @Param(':id') id,
        @Body() todo: Partial<TodoDto>

    ) {
        console.log(id, todo)
        return 'update todo';
    }

}



