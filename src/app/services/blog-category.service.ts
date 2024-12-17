import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogCategoryService {

  constructor(private http:HttpClient) { }

  getBlogCategory(pageId: number, pageSize: number): Observable<any> {
    const url = `${API_URL}?page_id=${pageId}&page_size=${pageSize}`;
    return this.http.get<any>(url);
  }
}


