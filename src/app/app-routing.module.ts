import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { SearchGifComponent } from './modules/search-gif/pages/search-gif/search-gif.component';
import { ServerComponent } from './modules/server/pages/server/server.component';
import { ApplicationComponent } from './modules/application/pages/application/application.component';
import { SearchSingleComponent } from './modules/search-single/search-single.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'server', component: ServerComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'search', component: SearchGifComponent },
  { path: 'search-single/:id', component: SearchSingleComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
