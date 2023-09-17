import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: Todos;
  @Output() todoItemDelete: EventEmitter<Todos> = new EventEmitter()
  onClick(todo:Todos){
    this.todoItemDelete.emit(todo)
    console.log(todo+"has been clicked")
  }

}
