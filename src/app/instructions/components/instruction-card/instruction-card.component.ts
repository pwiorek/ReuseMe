import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Instruction } from "@core/models/instruction.model";
import { InstructionsApiService } from "@core/services/instructions-api.service";
import { Subject } from "rxjs";

@Component({
  selector: 'app-instruction-card',
  templateUrl: './instruction-card.component.html',
  styleUrls: ['./instruction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionCardComponent implements OnInit, OnDestroy {
  @Input() instruction: Instruction;
  private unsub$: Subject<void> = new Subject();

  public rating: number = 0;

  constructor(
    private instructionApi: InstructionsApiService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.instructionApi.getRating(this.instruction.id).subscribe(rating => {
      this.rating = rating;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
