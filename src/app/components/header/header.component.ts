import { Component } from '@angular/core';
import { HotSearchsService } from 'src/app/services/hot-searchs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  dropdownVisible = false;
  searchDropdownVisible = false;

  searchInput: string = '';

  hotSearchs: any = [];

  onSearchInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchInput = inputElement.value;
  }

  constructor(private HotSearchService: HotSearchsService) {}
  ngOnInit(): void {
    this.fetchHotSearch(1, 6);
  }

  onSearch(): void {
    console.log('onSearch');
    window.open(
      `https://www.baidu.com/s?wd=${encodeURIComponent(this.searchInput)}`,
      '_blank'
    );
  }

  toggleDropdown(): void {
    // console.log('toggleDropdown');

    this.dropdownVisible = !this.dropdownVisible;
  }
  toggleSearchDropdown(): void {
    console.log('toggleSearchDropdown');
    this.searchDropdownVisible = !this.searchDropdownVisible;
  }

  fetchHotSearch(pageId: number, pageSize: number): void {
    this.HotSearchService.getHotSearchs(pageId, pageSize).subscribe(
      (data) => {
        this.hotSearchs = data.hotSearchs;
      },
      (error) => {
        console.error('Error fetching HotSearch:', error);
      }
    );
  }
}
