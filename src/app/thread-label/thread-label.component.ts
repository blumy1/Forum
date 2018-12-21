import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../models/Thread';
import { ThreadsService } from '../shared/threads.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-thread-label',
  templateUrl: './thread-label.component.html',
  styleUrls: ['./thread-label.component.css']
})
export class ThreadLabelComponent implements OnInit {

  constructor(private threadsService: ThreadsService) { }

  @Input()
  thread: Thread;

  lastPost: Post;

  getLastPost() {
    this.threadsService.getLastThreadPost(this.thread.id).subscribe(post => this.lastPost = post);
  }

  ngOnInit() {
    this.getLastPost();
  }

}
