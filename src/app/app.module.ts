import { AppService } from './shared/app.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BookListDashboardComponent } from './book-list-dashboard/book-list-dashboard.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    BookListDashboardComponent,
    ContentManagementComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatGridListModule
    ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
