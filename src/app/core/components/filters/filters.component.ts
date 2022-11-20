import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FiltersApiService } from "@core/services/filters.api.service";
import { Subject, takeUntil } from "rxjs";
import { MatDialogRef } from "@angular/material/dialog";
import { SearchService } from "@core/services/search.service";
import { MatSelectChange } from "@angular/material/select";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnDestroy {
  @Output() hideFiltersEvent: EventEmitter<void> = new EventEmitter();
  public tags: string[] = [];
  public tagsFormControl = new FormControl();

  private unsub: Subject<void> = new Subject();

  constructor(
    private filtersApi: FiltersApiService,
    private searchService: SearchService,
    private dialogRef: MatDialogRef<FiltersComponent>
  ) {}

  ngOnInit(): void {
    this.getTags();
    this.tagsFormControl.setValue(this.searchService.lastParams.tags?.split(','))
    this.tagsFormControl.updateValueAndValidity();
  }

  private getTags(): void {
    this.filtersApi.getTags('').pipe(
      takeUntil(this.unsub)
    ).subscribe(tags => this.tags = tags)
  }

  public hideFilters(): void {
    this.dialogRef.close()
  }

  public filterTags(matSelect: MatSelectChange): void {
    const params = this.searchService.lastParams;
    params.tags = matSelect.value.join(',');

    this.searchService.fetchInstructions(params);
  }

  ngOnDestroy(): void {
    this.unsub.next();
    this.unsub.complete();
  }

}
