import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  displayResume: boolean = false;

  contacts = [
    { name: 'LinkedIn', icon: 'https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg', link: 'https://www.linkedin.com/in/ashish-yadav-b6a9241a9/' },
    { name: 'Github', icon: 'https://www.svgrepo.com/show/341847/github.svg', link: 'https://github.com/DeveloperAshish17' },
    // { name: 'HackerRank', icon: 'https://www.svgrepo.com/show/306171/hackerrank.svg', link: 'https://www.hackerrank.com/yadavashish0798?hr_r=1' },
    { name: 'Email', icon: 'https://www.svgrepo.com/show/349378/gmail.svg', link: 'mailto:yadavashish0798@gmail.com' },
    { name: 'Whats App', icon: 'https://www.svgrepo.com/show/349563/whatsapp.svg', link: 'https://wa.me/7272868636' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}