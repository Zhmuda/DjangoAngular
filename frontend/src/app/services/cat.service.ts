import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiUrl = 'http://localhost:8000/api/cats/';

  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }

  createCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.apiUrl, cat);
  }

  updateCat(cat: Cat): Observable<Cat> {
    return this.http.put<Cat>(`${this.apiUrl}${cat.id}/`, cat);
  }

  deleteCat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
