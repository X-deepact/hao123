import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { SiteItemsService } from '../services/site-items.service';
import { CommonSitesService } from '../services/common-sites.service';
import { GovSitesService } from '../services/gov-sites.service';
import { HotListService } from '../services/hot-list.service';
import { HotListItemService } from '../services/hot-list-item.service';
import { CategoryTabService } from '../services/categorytab.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isVisible: boolean = false; // Initially, the div is hidden

  toggleVisibility(): void {
    this.isVisible = !this.isVisible; // Toggle the visibility state
  }
  categories: any[] = [];
  siteItems: any[] = [];
  commonSiteItems: any[] = [];
  categoryTabs: any[] = [];
  govSites: any[] = [];
  hotLists: any[] = [];
  hotListItems: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private siteItemService: SiteItemsService,
    private commonSitesService: CommonSitesService,
    private GovSitesService: GovSitesService,
    private HotListService: HotListService,
    private HotListItemService: HotListItemService,
    private CategoryTabService: CategoryTabService
  ) {}
  ngOnInit(): void {
    this.fetchCategories(1, 10);
    this.fetchsiteItems(1, 10);
    this.fetchCommonSiteItem(1, 10);
    this.fetchCategoriesTab(1, 10);
    this.fetchGovSites(1, 10);
    this.fetchHotList(1, 10);
    this.fetchHotListItem(1, 10);
  }

  // Categories
  fetchCategories(pageId: number, pageSize: number): void {
    this.categoryService.getCategories(pageId, pageSize).subscribe(
      (data) => {
        this.categories = data.categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Categories
  fetchCategoriesTab(pageId: number, pageSize: number): void {
    this.CategoryTabService.getCategoryTabs(pageId, pageSize).subscribe(
      (data) => {
        this.categoryTabs = data.itemCategories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  //  siteItems
  fetchsiteItems(pageId: number, pageSize: number): void {
    this.siteItemService.getsiteItems(pageId, pageSize).subscribe(
      (data) => {
        this.siteItems = data.siteItems;
      },
      (error) => {
        console.error('Error fetching siteItems:', error);
      }
    );
  }

  // commonSiteItem
  fetchCommonSiteItem(pageId: number, pageSize: number): void {
    this.commonSitesService.getCommonSiteItem(pageId, pageSize).subscribe(
      (data) => {
        this.commonSiteItems = data.commonSite;
      },
      (error) => {
        console.error('Error fetching commonSiteItem:', error);
      }
    );
  }

  // govSites
  fetchGovSites(pageId: number, pageSize: number): void {
    this.GovSitesService.getGovSiteItem(pageId, pageSize).subscribe(
      (data) => {
        this.govSites = data.govSites;
        console.log(this.govSites + 'asdfsadfsadfsadfsd');
      },
      (error) => {
        console.error('Error fetching GovSites:', error);
      }
    );
  }

  // hotList
  fetchHotList(pageId: number, pageSize: number): void {
    this.HotListService.gethotList(pageId, pageSize).subscribe(
      (data) => {
        this.hotLists = data.hotLists;
      },
      (error) => {
        console.error('Error fetching HotLists:', error);
      }
    );
  }

  // hotListItem
  fetchHotListItem(pageId: number, pageSize: number): void {
    this.HotListItemService.gethotListItem(pageId, pageSize).subscribe(
      (data) => {
        this.hotListItems = data;
        console.log(JSON.stringify(data));
      },
      (error) => {
        console.error('Error fetching HotLists:', error);
      }
    );
  }
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; // Import HttpClient

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css'],
// })
// export class DashboardComponent implements OnInit {
//   categories: any[] = [];
//   siteItems: any[] = [];
//   commonSiteItems: any[] = [];
//   govSites: any[] = [];
//   hotLists: any[] = [];
//   hotListItems: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     // Fetch the local JSON files instead of calling services
//     this.fetchCategories();
//     this.fetchSiteItems();
//     this.fetchCommonSiteItems();
//     this.fetchGovSites();
//     this.fetchHotList();
//     this.fetchHotListItems();
//   }

//   // Categories
//   fetchCategories(): void {
//     this.http.get<any[]>('assets/data/category.json').subscribe(
//       (data) => {
//         this.categories = data;
//         console.log('Categories:', this.categories);
//       },
//       (error) => {
//         console.error('Error fetching categories:', error);
//       }
//     );
//   }

//   // Site Items
//   fetchSiteItems(): void {
//     this.http.get<any[]>('assets/data/site-items.json').subscribe(
//       (data) => {
//         this.siteItems = data;
//         console.log('Site Items:', this.siteItems);
//       },
//       (error) => {
//         console.error('Error fetching site items:', error);
//       }
//     );
//   }

//   // Common Site Items
//   fetchCommonSiteItems(): void {
//     this.http.get<any[]>('assets/data/common-site.json').subscribe(
//       (data) => {
//         this.commonSiteItems = data;
//         console.log('Common Site Items:', this.commonSiteItems);
//       },
//       (error) => {
//         console.error('Error fetching common site items:', error);
//       }
//     );
//   }

//   // Gov Sites
//   fetchGovSites(): void {
//     this.http.get<any[]>('assets/data/gov-sites.json').subscribe(
//       (data) => {
//         this.govSites = data;
//         console.log('Gov Sites:', this.govSites);
//       },
//       (error) => {
//         console.error('Error fetching gov sites:', error);
//       }
//     );
//   }

//   // Hot Lists
//   fetchHotList(): void {
//     this.http.get<any[]>('assets/data/hotlit-tab.json').subscribe(
//       (data) => {
//         this.hotLists = data;
//         console.log('Hot Lists:', this.hotLists);
//       },
//       (error) => {
//         console.error('Error fetching hot lists:', error);
//       }
//     );
//   }

//   // Hot List Items
//   fetchHotListItems(): void {
//     this.http.get<any[]>('assets/data/hotlist-items.json').subscribe(
//       (data) => {
//         this.hotListItems = data;
//         console.log('Hot List Items:', this.hotListItems);
//       },
//       (error) => {
//         console.error('Error fetching hot list items:', error);
//       }
//     );
//   }
// }
