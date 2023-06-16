import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  clients = [
    {
      id: 1,
      logo: 'airbnb.png',
    },
    {
      id: 2,
      logo: 'binance.png',
    },
    {
      id: 3,
      logo: 'coinbase.png',
    },
    {
      id: 4,
      logo: 'dropbox.png',
    },
  ];
}
