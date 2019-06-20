import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/movie.reducer';

import { AppComponent } from './app.component';
// import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from  './material.module';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';



import {MovieapiService} from './services/movieapi.service';
import { PreviewComponent } from './components/preview/preview.component';

import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RootModule} from './root.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    PreviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      movie: reducer
    }),
    BrowserAnimationsModule,
    MyMaterialModule,
    RoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RootModule
  ],
  entryComponents: [
    PreviewComponent,
    SnackbarComponent
  ],
  providers: [MovieapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
