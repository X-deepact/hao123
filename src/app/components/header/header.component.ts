import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdownVisible = false;
  searchDropdownVisible = false;



  toggleDropdown(): void {
    console.log('toggleDropdown');

    this.dropdownVisible = !this.dropdownVisible;
  }
  toggleSearchDropdown(): void {
    console.log('toggleSearchDropdown');
    this.searchDropdownVisible = !this.searchDropdownVisible;
  }
}
