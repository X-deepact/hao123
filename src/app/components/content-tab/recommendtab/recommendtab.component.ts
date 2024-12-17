import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommendtab',
  templateUrl: './recommendtab.component.html',
  styleUrls: ['./recommendtab.component.css']
})
export class RecommendtabComponent {
  @Input() topNews!: any;
}
