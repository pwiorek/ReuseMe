import { Component, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Instruction } from "@core/models/instruction.model";
import { emptyPage, PageResponse } from '@core/models/page.model';
import { SearchService } from "@core/services/search.service";
import { Subject, takeUntil } from "rxjs";


@Component({
  selector: 'app-insctructions-section',
  templateUrl: './instructions-section.component.html',
  styleUrls: ['./instructions-section.component.scss']
})
export class InstructionsSectionComponent implements OnDestroy {
  public instructions: PageResponse<Instruction> = emptyPage()
  private unsub$: Subject<void> = new Subject();

  constructor(
    private searchService: SearchService
  ) {
    this.fetchInstructions();
  }

  private fetchInstructions(): void {
    this.searchService.getInstructions().pipe(
      takeUntil(this.unsub$)
    ).subscribe(instructions => this.instructions = instructions);

    this.searchService.fetchInstructions({page: 0, count: 5});
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  onPageChanged(event: PageEvent) {
    this.searchService.fetchInstructions({page: event.pageIndex, count: event.pageSize});
  }
}
