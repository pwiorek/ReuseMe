import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  imports: [
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
