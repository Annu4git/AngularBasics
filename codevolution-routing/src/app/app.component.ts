import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codevolution-routing';

  constructor(private router: Router) {}

  redirectToDepartmentList(): void {
    this.router.navigate(['/departments']);
  }

  redirectToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }
}
