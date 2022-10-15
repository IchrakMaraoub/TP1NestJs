import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleController } from './todo-module/todo-module.controller';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoServiceService } from './todo-service/todo-service.service';

@Module({
  imports: [PremierModule],
  controllers: [AppController, TodoModuleController],
  providers: [AppService, TodoServiceService],
  

})
export class AppModule {}
