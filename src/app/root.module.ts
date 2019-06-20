import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MyMaterialModule } from  './material.module';
import { MovielistComponent } from './components/movielist/movielist.component';
import { CookieService } from 'ngx-cookie-service';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {MoviecookieService} from './services/moviecookie.service';

@NgModule({
  declarations: [SpinnerComponent, MovielistComponent, SnackbarComponent],
  imports: [
    MyMaterialModule,
    CommonModule
  ],
  exports:[SpinnerComponent, MovielistComponent],
  providers: [ CookieService, MoviecookieService],
})
export class RootModule { }
