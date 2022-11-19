import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environment/environment";

@Injectable({
  providedIn: 'root'
})
export class FiltersApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getTags(query: string): Observable<string[]> {
    const params = new HttpParams({fromObject: {q: query}});
    return this.http.get<string[]>(`${environment.apiUrl}tags`, { params });
  }
}
