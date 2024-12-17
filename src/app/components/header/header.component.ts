import { Component } from '@angular/core';
import { SearchCategoryTabData } from 'src/app/data/search-tab-data';
import { HotSearchsService } from 'src/app/services/hot-searchs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  placeholders: string[] = ['data 1 slide', 'data 2 slide', 'data 3 slide'];
  currentPlaceholder: string = '';
  placeholderIndex: number = 0;
  intervalId: any;


  dropdownVisible = false;
  searchDropdownVisible = false;

  searchInput: string = '';
  selectedOption: string | null = null;
  dropdownOptions: any[] = SearchCategoryTabData;


  hotSearchs: any = [];
  isModalOpen: boolean = false ; //loginModal
  isLoginMode: boolean = true ; // Email Pass true and Phone login false

  changeLoginMode = ()=>{
    this.isLoginMode = !this.isLoginMode;
 }

 selectOption(option: string): void {
  this.selectedOption = option;
  this.dropdownVisible = false; // Close the dropdown after selection
}


toggleDropdown(): void {
  console.log('toggleDropdown');

  this.dropdownVisible = !this.dropdownVisible;
}
toggleSearchDropdown(): void {
  console.log('toggleSearchDropdown');
  this.searchDropdownVisible = !this.searchDropdownVisible;
}



 openLoginModal() {
  console.log('openLoginModal');
   this.isModalOpen = true;
 }

 closeModal() {
   this.isModalOpen = false;
 }

 onConfirm() {
   alert('Confirmed!');
   this.closeModal();
 }

 onCancel() {
   alert('Cancelled!');
   this.closeModal();
 }

  onSearchInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchInput = inputElement.value;
  }

  constructor(private HotSearchService: HotSearchsService) {}
  ngOnInit(): void {
    this.fetchHotSearch(1, 6);
    this.startAnimation(); // Change every 2 seconds
  }

  startAnimation() {
    // Start cycling through the placeholders
    this.intervalId = setInterval(() => {
      this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholders.length;
      this.animatePlaceholder();
    }, 3000); // Change every 3 seconds
  }

  stopAnimation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  animatePlaceholder() {
    const inputElement = document.getElementById('search-dropdown');
    if (inputElement) {
      // Trigger the fade animation
      inputElement.classList.remove('fade');
      void inputElement.offsetWidth; // Trigger reflow for animation restart
      inputElement.classList.add('fade');
    }

    // Update the placeholder text
    setTimeout(() => {
      this.currentPlaceholder = this.placeholders[this.placeholderIndex];
    }, 500); // Wait for the animation to finish before changing the placeholder text
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onSearch(): void {
    console.log('onSearch');
    window.open(
      `https://www.baidu.com/s?wd=${encodeURIComponent(this.searchInput)}`,
      '_blank'
    );
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
