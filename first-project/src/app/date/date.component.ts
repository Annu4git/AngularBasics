import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  dateMessage : String = "";

  someNumber : number = 10;;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' : ' + currentDate.toLocaleTimeString();
    }, 1000);
  }

  add2Num(a : number, b : number) {
    return a + b;
  }
}


