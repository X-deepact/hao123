import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostcontentComponent } from './components/postcontent/postcontent.component';
import { SideslideComponent } from './components/sideslide/sideslide.component';
import { HotlistComponent } from './components/hotlist/hotlist.component';
import { GamebarComponent } from './components/gamebar/gamebar.component';
import { SiteitemComponent } from './components/siteitem/siteitem.component';
import { CartabComponent } from './components/content-tab/cartab/cartab.component';
import { GametabComponent } from './components/content-tab/gametab/gametab.component';
import { LivetabComponent } from './components/content-tab/livetab/livetab.component';
import { VideotabComponent } from './components/content-tab/videotab/videotab.component';
import { RecommendtabComponent } from './components/content-tab/recommendtab/recommendtab.component';
import { SporttabComponent } from './components/content-tab/sporttab/sporttab.component';
import { TechtabComponent } from './components/content-tab/techtab/techtab.component';
import { HistorytabComponent } from './components/content-tab/historytab/historytab.component';
import { FashiontabComponent } from './components/content-tab/fashiontab/fashiontab.component';
import { WomantabComponent } from './components/content-tab/womantab/womantab.component';
import { EntertaintabComponent } from './components/content-tab/entertaintab/entertaintab.component';
import { FinancetabComponent } from './components/content-tab/financetab/financetab.component';
import { GamesliderComponent } from './components/gameslider/gameslider.component';
import { BlogPostComponent } from './components/common/blog-post/blog-post.component';
import { ModalComponent } from './components/common/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PostcontentComponent,
    SideslideComponent,
    HotlistComponent,
    GamebarComponent,
    SiteitemComponent,
    CartabComponent,
    GametabComponent,
    LivetabComponent,
    VideotabComponent,
    RecommendtabComponent,
    SporttabComponent,
    TechtabComponent,
    HistorytabComponent,
    FashiontabComponent,
    WomantabComponent,
    EntertaintabComponent,
    FinancetabComponent,
    GamesliderComponent,
    BlogPostComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
