import { Injectable } from '@angular/core';
import { Instruction, InstructionParams } from "@core/models/instruction.model";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { InstructionsApiService } from "@core/services/instructions-api.service";
import { emptyPage, PageResponse } from "@core/models/page.model";
import { User } from '@core/models/user.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environment/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

    constructor(
        private http: HttpClient,
    ) { }

  fetchUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}users/${id}`);
  }

}
