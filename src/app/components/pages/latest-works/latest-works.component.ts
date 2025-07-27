import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-works',
  standalone: true,
  imports: [],
  templateUrl: './latest-works.component.html',
  styleUrl: './latest-works.component.css'
})
export class LatestWorksComponent {

  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.card-custom, .card-up, .card-zoom-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));
  }


}



