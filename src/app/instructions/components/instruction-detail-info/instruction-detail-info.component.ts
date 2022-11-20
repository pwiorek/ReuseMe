import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '@core/models/rating.model';
import { Instruction } from '@core/models/instruction.model';
import { InstructionsApiService } from '@core/services/instructions-api.service';
import { UsersApiService } from '@core/services/users.api.service';
import { mergeMap, tap } from 'rxjs';

@Component({
  selector: 'app-instruction-detail-info',
  templateUrl: './instruction-detail-info.component.html',
  styleUrls: ['./instruction-detail-info.component.scss']
})
export class InstructionDetailInfoComponent implements OnInit {

  instruction: Instruction
  instructionRatings: Rating[] = [];

  constructor(
    private route: ActivatedRoute,
    private usersApiService: UsersApiService,
    private instructionsApiService: InstructionsApiService,
  ) {
    this.route = route;
    this.usersApiService = usersApiService;
  }

  tags: any[] = ["first", "second", "third"];

  utilizedMaterials: any[] = ["first material", "second metarial"];

  instructionSteps: any[] = ["first step", "second step"];

  

  ngOnInit(): void {
    this.route.params.pipe(
      mergeMap(params => this.instructionsApiService.getInstructionById(params['id'])),
      tap(instruction => this.instruction = instruction),
      mergeMap(instruction => this.instructionsApiService.getRatingsForInstruction(instruction.id)),
      tap(ratings => this.instructionRatings = ratings)
    ).subscribe()
  }

}
