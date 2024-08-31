import { Component, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.css'
})
export class AddressCardComponent {

  @Input('user') user: User;

  isCollapsed : boolean = true;
  collapseButtonText: string = "Expand";

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed) {
      this.collapseButtonText = "Expand";
    } else {
      this.collapseButtonText = "Collapse";
    }
  }

  constructor() {
    
  }

  ngOnInit() {
  }
}
