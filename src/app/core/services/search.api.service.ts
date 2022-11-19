import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Instruction } from "@core/models/instruction.model";
import { environment } from "@environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  constructor(
    private http: HttpClient
  ) { }

  public searchInstructions(params: HttpParams): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${environment.apiUrl}instructions`, {params})
  }
}