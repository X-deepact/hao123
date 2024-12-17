import { Component, HostListener } from '@angular/core';
import { GovSitesService } from '../services/gov-sites.service';
import { HotListItemService } from '../services/hot-list-item.service';
import { feedTitles } from '../data/feed-title';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  govSites: any[] = [];
  hotListItems: any[] = [];
  TopListItems: any[] = []; //TODO: need to fetch
  feedTitles: any[] = feedTitles;

  constructor(
    private GovSitesService: GovSitesService,
    private HotListItemService: HotListItemService,
  ) {}
  ngOnInit(): void {
    this.fetchGovSites(1, 12);
    this.fetchHotListItem(1, 7);
  }



  isTopHidden = false; // Tracks visibility of the top section

  private previousScrollY = 0; // To track the previous scroll position

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    /// Check if the user is scrolling down and cannot scroll further up
    this.isTopHidden =
      currentScrollY > this.previousScrollY && currentScrollY > 0;

    // Update the previous scroll position
    this.previousScrollY = currentScrollY;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // govSites
  fetchGovSites(pageId: number, pageSize: number): void {
    this.GovSitesService.getGovSiteItem(pageId, pageSize).subscribe(
      (data) => {
        this.govSites = data.govSites;
        // console.log(this.govSites+"asdfsadfsadfsadfsd")
      },
      (error) => {
        console.error('Error fetching GovSites:', error);
      }
    );
  }

  // hotListItem
  fetchHotListItem(pageId: number, pageSize: number): void {
    this.HotListItemService.gethotListItem(pageId, pageSize).subscribe(
      (data) => {
        this.hotListItems = data.hotLists;
        // console.log(JSON.stringify(data))
      },
      (error) => {
        console.error('Error fetching HotLists:', error);
      }
    );
  }


}
