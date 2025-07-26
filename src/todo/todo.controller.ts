import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  @Inject()
  private readonly todoService: TodoService;
  private readonly logger = new Logger(TodoController.name);


  @Get()
  findAll(): Todo[] {
    this.logger.log("handling finda all request...")
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo) : void {
    this.logger.log("handling create request...")
    return this.todoService.create(todo);
  }
}