import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  name :string="";
  age=0;

  save(){
    console.log(this.name);
    console.log(this.age);
  }
}
