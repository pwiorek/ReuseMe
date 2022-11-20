import { Injectable } from '@angular/core';
import { Instruction, InstructionParams } from "@core/models/instruction.model";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { InstructionsApiService } from "@core/services/instructions-api.service";
import { HttpParams } from "@angular/common/http";
import { emptyPage, PageResponse } from "@core/models/page.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private instructions: BehaviorSubject<PageResponse<Instruction>> = new BehaviorSubject<PageResponse<Instruction>>(emptyPage());
  public lastParams: InstructionParams = { page: 0, count: 5 }

  constructor(
    private searchApi: InstructionsApiService
  ) { }

  public fetchInstructions(instructionParams: InstructionParams): void {
    this.lastParams = instructionParams;

    const params = new HttpParams({fromObject: {...instructionParams}})
    this.searchApi.searchInstructions(params).subscribe(instructions => this.instructions.next(instructions))
  }

  public getInstructions(): Observable<PageResponse<Instruction>> {
    return this.instructions.asObservable();
  }


}
