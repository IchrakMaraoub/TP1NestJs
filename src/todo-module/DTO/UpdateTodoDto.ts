import { PickType } from '@nestjs/mapped-types';
import { TodoDto } from './TodoDto';
export class UpdateTodoDto extends PickType (TodoDto, ['name'])   {
    
    NbDePage:number;
}