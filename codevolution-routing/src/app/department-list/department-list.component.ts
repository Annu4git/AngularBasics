import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  departmentLists = [
  {
    name: 'Angular',
    id: 1
  }, {
    name: 'React',
    id: 2
    }, {
    name: 'Node',
    id: 3
    }, {
    name: 'MongoDB',
    id: 4
    }
  ];

  selectedId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  showDepartmentDetails(id: number) {
    // absolute path
    // this.router.navigate(['/departments', id]);

    // relative path
    this.router.navigate([id], {relativeTo: this.activatedRoute});
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
  }

  isSelected(department: any) {
    return this.selectedId == department.id; 
  }
}
