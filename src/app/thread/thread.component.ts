import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../shared/threads.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/Post';
import { Thread } from '../models/Thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private route: ActivatedRoute, private threadsService: ThreadsService) { }

  threadId: number;
  posts: Post[];
  thread: Thread;

  getPosts() {
    this.threadsService.getThreadPosts(this.threadId).subscribe(posts => this.posts = posts);
  }

  getThread() {
    this.threadsService.getThread(this.threadId).subscribe(thread => this.thread = thread);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadId = params['threadId'];
    });
    this.getPosts();
    this.getThread();
  }
}
