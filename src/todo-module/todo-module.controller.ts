import { Body, Controller, Get, Post, Delete, Param, NotFoundException, Put } from '@nestjs/common';
import { TodoModel } from './Entities/TodoModel';
import { TodoDto } from './DTO/TodoDto';
import { UpdateTodoDto } from './DTO/UpdateTodoDto';
import { TodoServiceService } from 'src/todo-service/todo-service.service';

@Controller('todo')

export class TodoModuleController {
    constructor( private TodoService : TodoServiceService) {

        
    }
   
    @Get('')
    getTodos(): Array<TodoModel> {
        return this.TodoService.getTodos();
    }
   
    @Get(':id')
    getTodo(@Param('id') id) {
      this.TodoService.getTodo(id);
    }
  


    @Post()
    //addtodo(
        //SANS DTO
        //   @Body() newtodo :ModelTodo 
        // if (this.todos.length){
        //   newtodo.id=this.todos[this.todos.length -1].id  +1;
        // }
        // else{newtodo.id=1;}
        // this.todos.push(newtodo);

        // return newtodo ;
        addtododto(
        @Body() newtodo: TodoDto):TodoModel {
       return this.TodoService.addtododto(newtodo);
    }

    @Delete(':id')
    deletetodo(
        @Param('id') id
    ) {
       this.TodoService.deletetodo(+id);

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

       /* @Put(':id')
        updateTodo(@Param('id') id, @Body() updateTodoDto: UpdateTodoDto) {
          const todo = this.todos.find((todo) => todo.id == id);
      
          if (updateTodoDto.name) {
            todo.name = updateTodoDto.name;
          }
          if (updateTodoDto.description) {
            todo.description = updateTodoDto.description;
          }
          if (updateTodoDto.status) {
            todo.status = updateTodoDto.status;
          }
          return todo;
        }*/
    }




