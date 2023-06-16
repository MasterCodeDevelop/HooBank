import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footer = [
    {
      title: 'Useful Links',
      links: [
        {
          name: 'Content',
          link: 'https://www.hoobank.com/content/',
        },
        {
          name: 'How it Works',
          link: 'https://www.hoobank.com/how-it-works/',
        },
        {
          name: 'Create',
          link: 'https://www.hoobank.com/create/',
        },
        {
          name: 'Explore',
          link: 'https://www.hoobank.com/explore/',
        },
        {
          name: 'Terms & Services',
          link: 'https://www.hoobank.com/terms-and-services/',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        {
          name: 'Help Center',
          link: 'https://www.hoobank.com/help-center/',
        },
        {
          name: 'Partners',
          link: 'https://www.hoobank.com/partners/',
        },
        {
          name: 'Suggestions',
          link: 'https://www.hoobank.com/suggestions/',
        },
        {
          name: 'Blog',
          link: 'https://www.hoobank.com/blog/',
        },
        {
          name: 'Newsletters',
          link: 'https://www.hoobank.com/newsletters/',
        },
      ],
    },
    {
      title: 'Partner',
      links: [
        {
          name: 'Our Partner',
          link: 'https://www.hoobank.com/our-partner/',
        },
        {
          name: 'Become a Partner',
          link: 'https://www.hoobank.com/become-a-partner/',
        },
      ],
    },
  ];

  socialsMedia = [
    {
      id: 1,
      icon: 'instagram.svg',
      link: 'https://www.instagram.com/',
    },
    {
      id: 2,
      icon: 'facebook.svg',
      link: 'https://www.facebook.com/',
    },
    {
      id: 3,
      icon: 'twitter.svg',
      link: 'https://www.twitter.com/',
    },
    {
      id: 4,
      icon: 'linkedin.svg',
      link: 'https://www.linkedin.com/',
    },
  ];
}
