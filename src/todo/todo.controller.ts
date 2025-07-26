import { Body, Controller, Get, Inject, Logger, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  @Inject()
  private readonly todoService: TodoService;
  private readonly logger = new Logger(TodoController.name);


  @Get()
  findAll(): Todo[] {
    this.logger.log("handling find all request...")
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo) : void {
    this.logger.log("handling create request...")
    return this.todoService.create(todo);
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id : number) : Todo | undefined {
    this.logger.log("handling find one request...")
    return this.todoService.findOne(id);
  }
}