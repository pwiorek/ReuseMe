import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from "@core/services/search.service";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() onClick: EventEmitter<void> = new EventEmitter();
  public searchClicked: boolean;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  public clickSearchbar(): void {
    this.onClick.emit();
  }

  chuj() {
    console.log('xdd')
    this.searchClicked = true;
  }

  public searchInstructions(): void {
    this.searchService.fetchInstructions({page: 0, count: 5})
  }

}
