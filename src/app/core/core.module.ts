import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MaterialModule } from "../material.module";
import { FiltersComponent } from './components/filters/filters.component';
import { SearchComponent } from './components/search/search.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RatingComponent } from './components/rating/rating.component';

const components = [
  SearchbarComponent,
  FiltersComponent,
  SearchComponent,
  RatingComponent
]

const pipes = [
  TruncatePipe
]

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    RatingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...components,
    ...pipes
  ]
})
export class CoreModule { }
