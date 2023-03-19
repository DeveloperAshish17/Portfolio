import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    ContactMeComponent,
    ProjectsComponent,
    SkillsComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PdfViewerModule,
    DialogModule,
    TabViewModule
  ]
})
export class PagesModule { }
