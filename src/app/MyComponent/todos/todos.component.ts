import { Component } from '@angular/core';
import { Todos } from 'src/app/Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todos[];
  localStore:string
  constructor(){
    this.localStore = localStorage.getItem('todos')
    if (this.localStore===null) {
      this.todos = []
      
    } else {
      
      this.todos = JSON.parse(this.localStore)
    }


  }
  deleteTodo(todo:Todos){
    let index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
  addTodo(todo:Todos){
    this.todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

}
