import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input()
  post: Post;

  getUserAvatar(): String {
    return this.post.author.imageUrl ? this.post.author.imageUrl : 'https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg';
  }

  ngOnInit() {

  }

}
