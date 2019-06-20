import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';
import { TopratedComponent } from './components/toprated/toprated.component';
import { MyMaterialModule } from  './material.module';
import {RootModule} from './root.module';
import { SavedComponent } from './components/saved/saved.component';
const childRoutes: Routes = [
  { path: 'top_rated', component: TopratedComponent},
  { path: 'popular', component: PopularmoviesComponent},
  { path: 'saved', component: SavedComponent},
];
@NgModule({
  declarations: [PopularmoviesComponent, TopratedComponent, SavedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    MyMaterialModule,
    RootModule
  ],
  exports: []
})
export class PreviewModule { }
