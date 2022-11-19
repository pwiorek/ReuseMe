import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FiltersApiService } from "@core/services/filters.api.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnDestroy {
  @Output() hideFiltersEvent: EventEmitter<void> = new EventEmitter();

  private unsub: Subject<void> = new Subject();

  constructor(
    private filtersApi: FiltersApiService
  ) {

  }

  ngOnInit(): void {
    this.filtersApi.getTags('').pipe(
      takeUntil(this.unsub)
    ).subscribe(r => console.log(r))
  }

  public hideFilters(): void {
    this.hideFiltersEvent.emit();
  }

  ngOnDestroy(): void {
    this.unsub.next();
    this.unsub.complete();
  }

}
