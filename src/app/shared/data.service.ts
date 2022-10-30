import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  toDos: Todo[] = [
    new Todo('this is a test!', false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi harum molestiae quaerat laboriosam, sed pariatur unde consequuntur. Nesciunt aliquam illo odio autem facere magnam architecto libero recusandae repellat dolore.', true)
  ]

  constructor() { }

  getAllToDos() {
    return this.toDos
  }

  addToDo(toDo: Todo) {
    this.toDos.push(toDo)
  }

  updateToDo(index: number, updatedToDo: Todo) {
    this.toDos[index] = updatedToDo
  }

  deleteToDo(index: number) {
    this.toDos.splice(index, 1)
  }

}
