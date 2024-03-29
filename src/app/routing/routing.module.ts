import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  { path: 'movies', loadChildren: '../preview.module#PreviewModule'},
  { path: '', component: HomeComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
