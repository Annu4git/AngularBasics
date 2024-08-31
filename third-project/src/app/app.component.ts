import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private testService: TestService) {
    this.testService = testService;
    testService.print123("hello from Dependecy injection");
  }
}
