import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

  @ContentChild('appHeader') headerElement;

  ngOnInit() {
    console.log("app header : " + this.headerElement);
  }
}
