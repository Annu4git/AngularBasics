import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css'
})
export class DepartmentDetailComponent {

  public departmentId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.departmentId = id;

    this.activatedRoute.paramMap.subscribe(params => {
      this.departmentId = params.get('id');
    });
  }

  showPreviousDepartment() {
    // absolute path
    // this.router.navigate(['/department-detail', parseInt(this.departmentId) - 1]);

    // relative path
    this.router.navigate(['../', parseInt(this.departmentId) - 1], {relativeTo: this.activatedRoute});

  }

  showNextDepartment() {
    console.log(this.activatedRoute);
    // absolute path
    // this.router.navigate(['/department-detail', parseInt(this.departmentId) + 1]);

    // relative path
    this.router.navigate(['../', parseInt(this.departmentId) + 1], {relativeTo: this.activatedRoute});
  }

  goToDepartments() {
    let selectId = this.departmentId ? this.departmentId : null;
    // absolute path
    // this.router.navigate(['/departments', {id: selectId}]);

    // relative path
    this.router.navigate(['../', {id: selectId}], {relativeTo: this.activatedRoute});

  }

}
