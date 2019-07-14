import { ContentManagementComponent } from './content-management/content-management.component';
import { CoursesComponent } from './courses/courses.component';
import { BookListDashboardComponent } from './book-list-dashboard/book-list-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
    path: 'dashboad',
    component: BookListDashboardComponent
  },
  {
    path: 'contentManagement',
    component: ContentManagementComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: '',
    redirectTo: 'dashboad',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: BookListDashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
