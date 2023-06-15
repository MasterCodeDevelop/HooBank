import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hash = window.location.hash;
  toggle = false;

  setActive = (e: any) => {
    const { classList } = e.target,
      active = e.target.parentElement.parentElement.querySelector('.active');
    if (active) active.classList.remove('active');
    if (!classList.contains('active')) classList.add('active');
    this.toggle = false;
  };

  setToggle = () => {
    this.toggle = !this.toggle;
  };
  navLinks = [
    {
      id: 'home',
      title: 'Home',
    },
    {
      id: 'features',
      title: 'Features',
    },
    {
      id: 'product',
      title: 'Product',
    },
    {
      id: 'clients',
      title: 'Clients',
    },
  ];
}
