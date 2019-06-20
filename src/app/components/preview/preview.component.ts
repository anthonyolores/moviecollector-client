import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State} from '../../models/movies.model';
import { AppState } from './../../app.state';
import {MovieapiService} from './../../services/movieapi.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MoviecookieService} from './../../services/moviecookie.service';
import {SnackbarComponent} from './../../components/snackbar/snackbar.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  stateData: Observable<State>;
  preview: any;
  keywords: any;
  buttonTxt: string;
  @Output() cookieChanged = new EventEmitter();
  constructor(private cookieService: MoviecookieService, 
    private store: Store<AppState>, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private movieapiService:MovieapiService,
    private _bottomSheet: MatBottomSheet) {
    this.stateData = this.store.select('movie');
    this.stateData.subscribe(value => {    
      this.preview = value.preview;
    });
  }

  ngOnInit() {
    this.buttonTxt = this.cookieService.exists(this.preview.id)?"Remove":"Save";
    this.movieapiService.getKeywords(this.preview).subscribe(response => {
      this.keywords = response.keywords.length===0?null:response;
    });
  }

  addMovie(){
    if(!this.cookieService.hasCookie()){
      this._bottomSheet.open(SnackbarComponent);
    }
    else{
      if(!this.cookieService.exists(this.preview.id)){
        this.cookieService.add(this.preview.id);
      }
      else{
        this.cookieService.remove(this.preview.id);
      }
      this.buttonTxt = this.cookieService.exists(this.preview.id)?"Remove":"Save";
    }
    this.cookieChanged.emit();
  }

}
