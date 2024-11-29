import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { SiteItemsService } from '../services/site-items.service';
import { CommonSitesService } from '../services/common-sites.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  categories: any[] = [];
  siteItems: any[] = [];
  commonSiteItems: any[] = [];
  

  constructor(private categoryService: CategoryService,
    private siteItemService : SiteItemsService,
    private commonSitesService : CommonSitesService
  ) {}
  ngOnInit(): void {
    this.fetchCategories(1, 10); 
    this.fetchsiteItems(1, 10); 
    this.fetchCommonSiteItem(1, 10); 

  }

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
    
    fetchCommonSiteItem(pageId: number, pageSize : number) :void{
      this.commonSitesService.getCommonSiteItem(pageId, pageSize).subscribe(
        (data) => {
          this.commonSiteItems = data.commonSite;
          console.log(JSON.stringify(data))
        },
        (error) =>{
          console.error('Error fetching siteItems:', error);
        }
      )
    };
}
