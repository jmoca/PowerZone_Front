import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  standalone: true,
})
export class CarrouselComponent  implements OnInit {
 images: String[] = [
    'assets/img/carru1.png',
    'assets/img/carru2.png',
    'assets/img/carru3.png'
   ];

 currentIndex = 0;

  constructor() { }

  ngOnInit() {
    this.startCarousel()
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // Cambia de imagen cada 5 segundos
  }

}
