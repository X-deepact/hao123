import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http:HttpClient) { }

  getBlogPost(pageId: number, pageSize: number): Observable<any> {
    const url = `${API_URL}/blogPosts?page_id=${pageId}&page_size=${pageSize}`;
    return this.http.get<any>(url);
  }

  getBlogPostByCategory(cateogryId: number, pageId: number, pageSize: number): Observable<any> {
    const url = `${API_URL}/getBlogByCategory/category=${cateogryId}&page_id=${pageId}&page_size=${pageSize}`;
    return this.http.get<any>(url);
  }



}
