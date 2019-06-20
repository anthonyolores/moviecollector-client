import { Action } from '@ngrx/store'
import { Movies, State} from '../models/movies.model'
import * as MovieActions from './../actions/movie.actions'
import {ActionTypes} from './../models/actiontypes.model';

//init state
const initPM: Movies = {};

const initialState:State = {
    popularMovies:initPM,
    header:{name:"Movie Collector"},
    preview:null
}


export function reducer(state:State = initialState, action:MovieActions.Actions){
    switch(action.type) {
        case ActionTypes.SET_MOVIES_POPULAR:
            return {...state, popularMovies:action.payload};
        case ActionTypes.SET_HEADER:
            return {...state, header:{...action.payload}};
        case ActionTypes.SET_PREVIEW:
            return {...state,  preview:action.payload};            
        default:{
            return state;
        }
           
    }
}