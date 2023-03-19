import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {},
    children: [
      { path: 'about', component: AboutUsComponent, data: { title: 'About Us Component' } },
      { path: 'contact', component: ContactMeComponent, data: { title: 'Contact Me Component' } },
      { path: 'skills', component: SkillsComponent, data: { title: 'Skills Component' } },
      { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
