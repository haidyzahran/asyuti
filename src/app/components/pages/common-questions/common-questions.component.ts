import { Component } from '@angular/core';

@Component({
  selector: 'app-common-questions',
  standalone: true,
  imports: [],
  templateUrl: './common-questions.component.html',
  styleUrl: './common-questions.component.css'
})
export class CommonQuestionsComponent {

  constructor() { }


  
  toggleFAQ(event: Event): void {
    const element = event.currentTarget as HTMLElement;
    
    element.classList.toggle('active');
    
    const answer = element.nextElementSibling as HTMLElement;
    if (answer) {
      answer.classList.toggle('active');
    }
  }



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
      // threshold: 0.2
      threshold: 0,
    });

    cards.forEach(card => observer.observe(card));
  }


  openBlock: number | null = null;

  toggle(blockNum: number) {
    this.openBlock = this.openBlock === blockNum ? null : blockNum;
  }


}
