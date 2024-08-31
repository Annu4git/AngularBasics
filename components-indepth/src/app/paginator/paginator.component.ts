import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

  @Input() totalPages: number;

  @Output() pageClick = new EventEmitter<number>;

  pageArray: number[];

  constructor() {
    
  }

  ngOnInit() {
    this.pageArray = new Array(this.totalPages);
  }

  pageClicked(pageNumber: number) {
    this.pageClick.emit(pageNumber);
  }
}
