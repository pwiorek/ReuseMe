import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FinderComponent } from './components/finder/finder.component';
import { MaterialModule } from "../material.module";
import { FiltersComponent } from './components/filters/filters.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    SearchbarComponent,
    FinderComponent,
    FiltersComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SearchComponent,
  ]
})
export class CoreModule { }
