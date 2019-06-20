import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatSnackBarModule,MatListModule,MatIconModule,MatBottomSheetModule, MatDialogModule, MatChipsModule, MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatSidenavModule} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';

const mods = [MatTabsModule,
    MatDividerModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatChipsModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule, 
    MatSidenavModule,
    MatCheckboxModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatProgressSpinnerModule, 
    MatInputModule, 
    MatListModule,
    MatPaginatorModule ]
@NgModule({
imports: mods,
exports: mods,

})

export  class  MyMaterialModule { }