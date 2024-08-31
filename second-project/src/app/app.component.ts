import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: User;
  textValue: string = "Initial value";

  constructor() {
    this.user = new User();
    this.user.name = 'Anurag';
    this.user.designation = 'Software Developer';
    this.user.address = 'Horley, West Sussex, RH138TR';
    this.user.phone = [
      '123-123-1234',
      '334-549-9833'
    ];
  }

}