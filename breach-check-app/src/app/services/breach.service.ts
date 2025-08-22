import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreachService {
  private apiBase = 'https://api.xposedornot.com/v1/breach-analytics';

  constructor(private http: HttpClient) {}

  checkEmail(email: string): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.get<any>(this.apiBase, { params });
  }
}