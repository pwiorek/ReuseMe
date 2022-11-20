import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  imports: [
    MatIconModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
