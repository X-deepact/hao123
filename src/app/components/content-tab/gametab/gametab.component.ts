import { Component } from '@angular/core';
import { GameContentDemoData } from 'src/app/data/game-content-blog';

@Component({
  selector: 'app-gametab',
  templateUrl: './gametab.component.html',
  styleUrls: ['./gametab.component.css']
})
export class GametabComponent {
  gameBlogsPost : any = GameContentDemoData;
}
