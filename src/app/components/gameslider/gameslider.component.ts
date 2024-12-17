import { Component } from '@angular/core';

@Component({
  selector: 'app-gameslider',
  templateUrl: './gameslider.component.html',
  styleUrls: ['./gameslider.component.css']
})
export class GamesliderComponent {
  slides = [
    { image: 'assets/sample/game1.gif', caption: 'Slide 1', buttonText: 'Learn More' },
    { image: 'assets/sample/game2.gif', caption: 'Slide 2', buttonText: 'Shop Now' },
    { image: 'assets/sample/game3.gif', caption: 'Slide 3', buttonText: 'Get Started' },
    { image: 'assets/sample/game4.gif', caption: 'Slide 3', buttonText: 'Get Started' },
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}

