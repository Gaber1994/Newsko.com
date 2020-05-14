import { NgModule } from '@angular/core';

// import {
//   MatIconModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatSidenavModule,
//   MatListModule,
//   MatGridListModule,
//   MatCardModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatDatepickerModule,
//   MatNativeDateModule,
//   MatDialogModule,
//   MatStepperModule,
//   MatTableModule,
//   MatSelectModule,
//   MatCheckboxModule,
//   MatRadioModule,
//   MatSnackBarModule,
//   MatProgressSpinnerModule,
//   MatAutocompleteModule
// } 
// from '@angular/material';
import {MatButtonModule} from'@angular/material/button'
import {MatToolbarModule} from'@angular/material/toolbar'
import {MatMenuModule} from'@angular/material/menu'
import {MatCardModule} from'@angular/material/card'
import {MatGridListModule} from'@angular/material/grid-list'
import {MatTableModule} from '@angular/material/table'
import {MatTabsModule} from '@angular/material/tabs'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    // MatIconModule,
     MatMenuModule,
     MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
    MatGridListModule,
    MatCardModule,
     MatFormFieldModule,
     MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatDialogModule,
    // MatStepperModule,
     MatTableModule,
    // MatSelectModule,
    // MatCheckboxModule,
    // MatRadioModule,
    // MatSnackBarModule,
    // MatProgressSpinnerModule,
    // MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    // MatIconModule,
     MatMenuModule,
     MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
     MatGridListModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatDialogModule,
    // MatStepperModule,
     MatTableModule,
    // MatSelectModule,
    // MatCheckboxModule,
    // MatRadioModule,
    // MatSnackBarModule,
    // MatProgressSpinnerModule,
    // MatAutocompleteModule
  ]
})
export class MaterialModule {}
