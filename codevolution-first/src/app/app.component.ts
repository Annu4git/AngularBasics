import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codevolution-first';

  msgToChild: string = "Hey child";
  msgFromChild: string;
}
