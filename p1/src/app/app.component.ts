import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 titulo:string = 'ejemplo1';
 numero:number = Math.floor(Math.random()*100);
}
