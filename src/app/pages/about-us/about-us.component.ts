import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  skills = [
    // { name: 'Python', icon: 'https://www.svgrepo.com/show/374016/python.svg' },
    // { name: 'Javascript', icon: 'https://www.svgrepo.com/show/349419/javascript.svg' },
    // { name: 'Typescript', icon: 'https://www.svgrepo.com/show/349540/typescript.svg' },
    // { name: 'C Sharp', icon: 'https://www.svgrepo.com/show/353622/c-sharp.svg' },
    // { name: 'MongoDB', icon: 'https://www.svgrepo.com/show/354090/mongodb.svg' },
    // { name: 'Expressjs', icon: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' },
    { name: 'Angular', icon: 'https://www.svgrepo.com/show/373427/angular.svg' },
    // { name: 'Nodejs', icon: 'https://www.svgrepo.com/show/354118/nodejs.svg' },
    // { name: 'Docker', icon: 'https://www.svgrepo.com/show/331370/docker.svg' },
    // { name: 'GitHub', icon: 'https://www.svgrepo.com/show/341847/github.svg' },
    // { name: 'Azure Devops', icon: 'https://www.svgrepo.com/show/373455/azure.svg' },
    { name: 'DotNet', icon: 'https://www.svgrepo.com/show/376369/dotnet.svg' },
    // { name: 'Django', icon: 'https://www.svgrepo.com/show/353657/django-icon.svg' },
    // { name: 'FastAPI', icon: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg' },
    // { name: 'Flask', icon: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg' },
    { name: 'SQL Server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
    // { name: 'MySQL', icon: 'https://www.svgrepo.com/show/354099/mysql.svg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
