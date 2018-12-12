import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';
import { Subcategory } from '../models/Subcategory';
import { Post } from '../models/Post';
import { Thread } from '../models/Thread';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  private categoryUrl = 'http://localhost:8080/Forum_war_exploded/api/categories/';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getCategorySubcategories(categoryId: number): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(this.categoryUrl + categoryId + '/subcategories');
  }

  getSubcategory(subcategoryId: number): Observable<Subcategory> {
    return this.http.get<Subcategory>(this.categoryUrl + 'subcategories/' + subcategoryId);
  }

  getLastSubcategoryPost(categoryId: number, subcategoryId: number): Observable<Post> {
    return this.http.get<Post>(this.categoryUrl + categoryId + '/subcategories/' + subcategoryId + '/last');
  }

  getSubcategoryThreads(subcategoryId: number) {
    return this.http.get<Thread[]>(this.categoryUrl + 'subcategories/' + subcategoryId + '/threads');
  }
}
