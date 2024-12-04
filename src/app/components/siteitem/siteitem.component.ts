import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CommonSitesService } from 'src/app/services/common-sites.service';
import { SiteItemsService } from 'src/app/services/site-items.service';

@Component({
  selector: 'app-siteitem',
  templateUrl: './siteitem.component.html',
  styleUrls: ['./siteitem.component.css']
})
export class SiteitemComponent {
  isLongContentHidden = true;
  categories: any[] = [];
  siteItems: any[] = [];
  commonSiteItems: any[] = [];
  toggleLongContent(): void {
    this.isLongContentHidden = !this.isLongContentHidden;
    console.log(this.isLongContentHidden);
  }
  constructor(
    private categoryService: CategoryService,
    private siteItemService : SiteItemsService,
    private commonSitesService : CommonSitesService,
  ) {}
  ngOnInit(): void {

    this.fetchsiteItems(1, 27);
    this.fetchCategories(1, 80); ///still wrong pagination
    this.fetchCommonSiteItem(1, 18);

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

}
