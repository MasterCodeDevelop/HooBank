import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      content:
        'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      name: 'Herman Jensen',
      title: 'Founder & Leader',
      img: 'people01.png',
    },
    {
      id: 2,
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: 'Steve Mark',
      title: 'Founder & Leader',
      img: 'people02.png',
    },
    {
      id: 3,
      content:
        'It is usually people in the money business, finance, and international trade that are really rich.',
      name: 'Kenn Gallagher',
      title: 'Founder & Leader',
      img: 'people03.png',
    },
  ];
}
