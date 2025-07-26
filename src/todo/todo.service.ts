import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [];

  findAll(): Todo[] {
    return this.storage;
  }

  create(todo: Todo): void {
    const currentMaxId = Math.max(0,...this.storage
      .map((t: Todo) => t.id)
      .filter((id): id is number => typeof id === 'number'));
    todo.id = currentMaxId + 1;
    this.storage.push(todo);
  }

  findOne(id: number): Todo | undefined {
    return this.storage.find((t: Todo) => t.id === id)
  }
}