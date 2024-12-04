import { Component, HostListener } from '@angular/core';
import { GovSitesService } from '../services/gov-sites.service';
import { HotListItemService } from '../services/hot-list-item.service';
import { HotSearchsService } from '../services/hot-searchs.service';
import { feedTitles } from '../data/feed-title';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {



  govSites: any[] = [];
  hotListItems: any[] = [];
  TopListItems: any[] = [];

  feedTitles: any[] = feedTitles;

  hotSearch: any [] = [];





  constructor(

    private GovSitesService : GovSitesService,
    private HotListItemService : HotListItemService,
    private HotSearchsService : HotSearchsService,

  ) {}
  ngOnInit(): void {

    this.fetchGovSites(1, 12);
    this.fetchHotListItem(1,7);
    this.fetchHotSearch(1,10);


  }



  isTopHidden = false; // Tracks visibility of the top section

  private previousScrollY = 0; // To track the previous scroll position

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    /// Check if the user is scrolling down and cannot scroll further up
    this.isTopHidden = currentScrollY > this.previousScrollY && currentScrollY > 0;

    // Update the previous scroll position
    this.previousScrollY = currentScrollY;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }




  // govSites
  fetchGovSites(pageId: number, pageSize : number) :void{
    this.GovSitesService.getGovSiteItem(pageId, pageSize).subscribe(
      (data) => {
        this.govSites = data.govSites;
        // console.log(this.govSites+"asdfsadfsadfsadfsd")
      },
      (error) =>{
        console.error('Error fetching GovSites:', error);
      }
    )
  };


  // hotListItem
  fetchHotListItem(pageId: number, pageSize : number) :void{
    this.HotListItemService.gethotListItem(pageId, pageSize).subscribe(
      (data) => {
        this.hotListItems =  data.hotLists;
        // console.log(JSON.stringify(data))
      },
      (error) =>{
        console.error('Error fetching HotLists:', error);
      }
    )
  };

  // hotSearchs //no work
  fetchHotSearch(pageId: number, pageSize : number) :void{
    this.HotSearchsService.getHotSearchs(pageId, pageSize).subscribe(
      (data) => {
        this.hotSearch =  data;
        console.log(JSON.stringify(data))
      },
      (error) =>{
        console.error('Error fetching HotLists:', error);
      }
    )
  };


}
