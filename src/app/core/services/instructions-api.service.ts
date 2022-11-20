import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Instruction } from "@core/models/instruction.model";
import { environment } from "@environment/environment";
import { PageResponse } from "@core/models/page.model";
import { Rating } from '@core/models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class InstructionsApiService {

  constructor(
    private http: HttpClient
  ) { }

  public searchInstructions(params: HttpParams): Observable<PageResponse<Instruction>> {
    return this.http.get<PageResponse<Instruction>>(`${environment.apiUrl}instructions`, {params})
  }

  public getRating(id: number): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}instructions/${id}/ratings/average`);
  }

  public getInstructionById(id: number): Observable<Instruction> {
    return this.http.get<Instruction>(`${environment.apiUrl}instructions/${id}`)
  }

  public getRatingsForInstruction(id: number): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${environment.apiUrl}instructions/${id}/ratings`)
  }
}
