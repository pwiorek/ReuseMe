import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  imports: [
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
