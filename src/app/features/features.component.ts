import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  features = [
    {
      id: 1,
      icon: 'star',
      title: 'Rewards',
      content:
        'The best credit cards offer some tantalizing combinations of promotions and prizes',
    },
    {
      id: 2,
      icon: 'shield',
      title: '100% Secured',
      content:
        'We take proactive steps make sure your information and transactions are secure.',
    },
    {
      id: 3,
      icon: 'send',
      title: 'Balance Transfer',
      content:
        'A balance transfer credit card can save you a lot of money in interest charges.',
    },
  ];
}
