import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'E-Ticaret';
  currentCategory:string;

  getChildData(data:string){
    this.currentCategory = data;
  }
}
