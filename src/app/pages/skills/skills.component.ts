import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Javascript', icon: 'https://www.svgrepo.com/show/349419/javascript.svg' },
    { name: 'Typescript', icon: 'https://www.svgrepo.com/show/349540/typescript.svg' },
    { name: 'C Sharp', icon: 'https://www.svgrepo.com/show/353622/c-sharp.svg' },
    { name: 'Angular', icon: 'https://www.svgrepo.com/show/373427/angular.svg' },
    { name: 'Nodejs', icon: 'https://www.svgrepo.com/show/354118/nodejs.svg' },
    { name: 'GitHub', icon: 'https://www.svgrepo.com/show/341847/github.svg' },
    { name: 'Azure Devops', icon: 'https://www.svgrepo.com/show/373455/azure.svg' },
    { name: 'DotNet', icon: 'https://www.svgrepo.com/show/376369/dotnet.svg' },
    { name: 'SQL Server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
