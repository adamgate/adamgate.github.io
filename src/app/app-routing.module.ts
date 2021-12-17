import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FilterFreeComponent } from './projects/filter-free/filter-free.component';
import { SeedSearcherComponent } from './projects/seed-searcher/seed-searcher.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'FilterFree', component: FilterFreeComponent },
  { path: 'SeedSearcher', component: SeedSearcherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
