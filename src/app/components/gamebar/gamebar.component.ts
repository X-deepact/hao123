import { Component } from '@angular/core';
import { gameDataSamples } from 'src/app/data/game-data';

@Component({
  selector: 'app-gamebar',
  templateUrl: './gamebar.component.html',
  styleUrls: ['./gamebar.component.css']
})
export class GamebarComponent {
  gameDataSamples: any[] = gameDataSamples;

}
