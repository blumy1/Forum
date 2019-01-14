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

  getThread(threadId: number): Observable<Thread> {
    return this.http.get<Thread>(this.threadUrl + '/' + threadId);
  }

  getLastThread(): Observable<Thread> {
    return this.http.get<Thread>(this.threadUrl + '/last');
  }

  getThreadPosts(threadId: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.threadUrl + '/' + threadId + '/posts');
  }

  getThreadPost(threadId: number, postId: number): Observable<Post> {
    return this.http.get<Post>(this.threadUrl + '/' + threadId + '/posts/' + postId);
  }

  getLastThreadPost(thradId: number): Observable<Post> {
    return this.http.get<Post>(this.threadUrl + '/' + thradId + '/posts/last');
  }

  createThread(thread: Thread): Observable<Thread> {
    return this.http.post<Thread>(this.threadUrl, thread);
  }

  createThreadPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.threadUrl + '/' + post.thread.id + '/posts', post);
  }
}
