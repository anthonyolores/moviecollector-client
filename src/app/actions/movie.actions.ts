import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Movies, Header, Preview } from '../models/movies.model'
import { ActionTypes} from './../models/actiontypes.model' 

export class SetMoviesPopular implements Action{
    readonly type = ActionTypes.SET_MOVIES_POPULAR;
    constructor(public payload:Movies){}
};

export class SetHeader implements Action{
    readonly type = ActionTypes.SET_HEADER;
    constructor(public payload:Header){}
};

export class SetPreview implements Action{
    readonly type = ActionTypes.SET_PREVIEW;
    constructor(public payload:Preview){}
};


export type Actions = SetMoviesPopular | SetHeader | SetPreview;