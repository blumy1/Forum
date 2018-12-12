import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../models/Thread';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private http: HttpClient) { }

  private threadUrl = 'http://localhost:8080/Forum_war_exploded/api/threads';

  getThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(this.threadUrl);
  }

  getThread(): Observable<Thread> {
    return null;
  }

  getThreadPosts(): Observable<Post[]> {
    return null;
  }

  getThreadPost(): Observable<Post> {
    return this.http.get<Post>(this.threadUrl);
  }
}
