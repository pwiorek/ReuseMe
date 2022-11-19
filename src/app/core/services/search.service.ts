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

  constructor(
    private searchApi: InstructionsApiService
  ) { }

  public fetchInstructions(instructionParams: InstructionParams): void {
    const params = new HttpParams({fromObject: {...instructionParams}})
    this.searchApi.searchInstructions(params).subscribe(instructions => this.instructions.next(instructions))
  }

  public getInstructions(): Observable<Instruction[]> {
    return this.instructions.asObservable();
  }


}
