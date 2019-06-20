import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {SnackbarComponent} from './components/snackbar/snackbar.component';
import {MoviecookieService} from './services/moviecookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Movie Collector';

  constructor(private _bottomSheet: MatBottomSheet, private cookieService:MoviecookieService) {}

  ngOnInit(){
    if(!this.cookieService.hasCookie()){
      this._bottomSheet.open(SnackbarComponent);
    }
  }
}
