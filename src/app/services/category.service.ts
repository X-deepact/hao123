import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/categories'; // Backend API URL

  constructor(private http: HttpClient) {}

  getCategories(pageId: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}?page_id=${pageId}&page_size=${pageSize}`;
    return this.http.get<any>(url);
  }
}