import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: 'Settings', url: 'settings'}
  ]

  title = 'routing-demo';
}
