import { Injectable } from '@angular/core';
import { Instruction, InstructionParams } from "@core/models/instruction.model";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { InstructionsApiService } from "@core/services/instructions-api.service";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private instructions: BehaviorSubject<Instruction[]> = new BehaviorSubject<Instruction[]>([]);
  public lastParams: InstructionParams = { page: 0, count: 5 }

  constructor(
    private searchApi: InstructionsApiService
  ) { }

  public fetchInstructions(instructionParams: InstructionParams): void {
    this.lastParams = instructionParams;

    const params = new HttpParams({fromObject: {...instructionParams}})
    this.searchApi.searchInstructions(params).subscribe(instructions => this.instructions.next(instructions.content))
  }

  public getInstructions(): Observable<Instruction[]> {
    return this.instructions.asObservable();
  }


}
