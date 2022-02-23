import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule, Routes, Router } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { SearchGifComponent } from './modules/search-gif/pages/search-gif/search-gif.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { TopMenuComponent } from './core/top-menu/top-menu.component';
import { ServerComponent } from './modules/server/pages/server/server.component';
import { ApplicationComponent } from './modules/application/pages/application/application.component';
import { ApplicationStatusComponent } from './modules/dashboard/components/application-status/application-status.component';
import { HealthCheckComponent } from './modules/dashboard/components/health-check/health-check.component';
import { ServerStatusComponent } from './modules/dashboard/components/server-status/server-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SearchSingleComponent } from './modules/search-single/search-single.component'; 
import { ApiService } from './core/http/api/api.service'; 



@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SearchGifComponent,
    FooterComponent,
    HeaderComponent,
    TopMenuComponent,
    ServerComponent,
    ApplicationComponent,
    ApplicationStatusComponent,
    HealthCheckComponent,
    ServerStatusComponent,
    SearchSingleComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    LazyLoadImageModule,
    RouterTestingModule, 
  ],
  providers: [ ApiService, HttpClient, RouterModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class AppModule { }
