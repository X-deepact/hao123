import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { SiteItemsService } from '../services/site-items.service';
import { CommonSitesService } from '../services/common-sites.service';
import { GovSitesService } from '../services/gov-sites.service';
import { HotListService } from '../services/hot-list.service';
import { HotListItemService } from '../services/hot-list-item.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  categories: any[] = [];
  siteItems: any[] = [];
  commonSiteItems: any[] = [];
  govSites: any[] = [];
  hotLists: any[] = [];
  hotListItems: any[] = [];
  

  constructor(private categoryService: CategoryService,
    private siteItemService : SiteItemsService,
    private commonSitesService : CommonSitesService,
    private GovSitesService : GovSitesService,
    private HotListService : HotListService,
    private HotListItemService : HotListItemService
  ) {}
  ngOnInit(): void {
    this.fetchCategories(1, 10); 
    this.fetchsiteItems(1, 10); 
    this.fetchCommonSiteItem(1, 10); 
    this.fetchGovSites(1, 10); 
    this.fetchHotList(1,10);
    this.fetchHotListItem(1,10);
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

  //  siteItems
    fetchsiteItems(pageId: number, pageSize : number) :void{
      this.siteItemService.getsiteItems(pageId, pageSize).subscribe(
        (data) => {
          this.siteItems = data.siteItems;
        },
        (error) =>{
          console.error('Error fetching siteItems:', error);
        }
      )
    };
    
    // commonSiteItem
    fetchCommonSiteItem(pageId: number, pageSize : number) :void{
      this.commonSitesService.getCommonSiteItem(pageId, pageSize).subscribe(
        (data) => {
          this.commonSiteItems = data.commonSite;
        },
        (error) =>{
          console.error('Error fetching commonSiteItem:', error);
        }
      )
    };

  // govSites
  fetchGovSites(pageId: number, pageSize : number) :void{
    this.GovSitesService.getGovSiteItem(pageId, pageSize).subscribe(
      (data) => {
        this.govSites = data.govSites;
        console.log(this.govSites+"asdfsadfsadfsadfsd")
      },
      (error) =>{
        console.error('Error fetching GovSites:', error);
      }
    )
  };

  // hotList
  fetchHotList(pageId: number, pageSize : number) :void{
    this.HotListService.gethotList(pageId, pageSize).subscribe(
      (data) => {
        this.hotLists = data.hotLists;
      },
      (error) =>{
        console.error('Error fetching HotLists:', error);
      }
    )
  };

  // hotListItem
  fetchHotListItem(pageId: number, pageSize : number) :void{
    this.HotListItemService.gethotListItem(pageId, pageSize).subscribe(
      (data) => {
        this.hotListItems =  data;
        console.log(JSON.stringify(data))
      },
      (error) =>{
        console.error('Error fetching HotLists:', error);
      }
    )
  };
}
