import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSnackBarModule } from "@angular/material/snack-bar";



@NgModule({
  imports: [
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSnackBarModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
