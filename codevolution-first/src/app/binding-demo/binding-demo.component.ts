import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrl: './binding-demo.component.css'
})
export class BindingDemoComponent {

  msgOnHTML: string = "";

  condition1: boolean = false;
  condition2: boolean = true;
  condition3: boolean = true;


  color: string = "RED";

  printOnConsole(textBox: string) {
    console.log(textBox);
    this.msgOnHTML = textBox;
  }

  @Input() msgFromParent: string;
  
  @Output() childEvent = new EventEmitter();

  msgSent: boolean = false;

  sendMsgToParent(msgToParent: string) {
    this.childEvent.emit(msgToParent);
    this.msgSent = true;
  }
}
