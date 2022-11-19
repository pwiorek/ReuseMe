import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SearchAnimations } from "./search.animations";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ SearchAnimations.filtersInOut ]
})
export class SearchComponent implements OnInit {
  public searchClicked: boolean;
  public filtersIn: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public showFilters(): void {
    this.searchClicked = true;
    this.filtersIn = true;
  }

  public hideFilters(): void {
    this.filtersIn = false;
    setTimeout(() => {
      this.searchClicked = false;
    }, 800)
  }

}
