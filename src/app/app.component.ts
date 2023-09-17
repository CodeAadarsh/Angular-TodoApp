import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = 'Aadarsh Verma'
  constructor(){
    setTimeout(() => {
      this.title="even"
    }, 2000);
  }
  Talert(){
    alert("This Page will be available soon");
  }
}
