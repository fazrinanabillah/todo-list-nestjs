import { Controller, Get, Inject } from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  @Inject()
  private readonly todoService: TodoService;

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }
}