import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MoviecookieService} from './../../services/moviecookie.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<SnackbarComponent>, private cookieService:MoviecookieService) { }

  ngOnInit() {
  }

  cookieAccept(accept:Number){
    this.cookieService.clear();
    if(accept === 1)
      this.cookieService.add("");

    this._bottomSheetRef.dismiss();
  }

}
