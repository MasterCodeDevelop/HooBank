import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  stats = [
    {
      id: '1',
      title: 'User Active',
      value: '3800+',
    },
    {
      id: '2',
      title: 'Trusted by Company',
      value: '230+',
    },
    {
      id: '3',
      title: 'Transaction',
      value: '$230M+',
    },
  ];
}
