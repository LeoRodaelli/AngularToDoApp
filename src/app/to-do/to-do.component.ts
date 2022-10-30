import { DataService } from './../shared/data.service';
import { Todo } from './../shared/todo.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDos: Todo[]
  showValidationErrors: boolean

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.toDos = this.dataService.getAllToDos()
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true

    this.dataService.addToDo(new Todo(form.value.text))

    this.showValidationErrors = false
    form.reset()
  }

  toggleCompleted(toDo: Todo) {
    // set to-do to completed
    toDo.completed = !toDo.completed
  }
}
