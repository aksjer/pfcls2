import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
