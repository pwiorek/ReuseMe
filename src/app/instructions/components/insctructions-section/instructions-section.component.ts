import { Component, OnDestroy } from '@angular/core';
import { Instruction } from "@core/models/instruction.model";
import { SearchService } from "@core/services/search.service";
import { Subject, takeUntil } from "rxjs";


@Component({
  selector: 'app-insctructions-section',
  templateUrl: './instructions-section.component.html',
  styleUrls: ['./instructions-section.component.scss']
})
export class InstructionsSectionComponent implements OnDestroy{
  public instructions: Instruction[] = [];
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

    this.searchService.fetchInstructions({page: 0, count: 3});
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
