import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThreadsService } from '../shared/threads.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/Post';
import { Thread } from '../models/Thread';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';
import { Subcategory } from '../models/Subcategory';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private threadsService: ThreadsService,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private threads: ThreadsService) { }

  threadId: number;
  posts: Post[];
  thread: Thread;
  isLoggedIn$: Observable<boolean>;
  postForm: FormGroup;

  availableFontFamilies = ['Arial', 'Times New Roman', 'Verdana', 'Comic sans MS', 'WildWest', 'Bedrock'];

  @ViewChild('message') messageBox: ElementRef;
  @ViewChild('fontColor') colorPicker: ElementRef;

  text = '';
  selectionStart = 0;
  selectionEnd = 0;

  getPosts() {
    this.threadsService.getThreadPosts(this.threadId).subscribe(posts => this.posts = posts);
  }

  getThread() {
    this.threadsService.getThread(this.threadId).subscribe(thread => this.thread = thread);
  }

  getPointerPosition() {
    this.selectionStart = this.messageBox.nativeElement.selectionStart;
    this.selectionEnd = this.messageBox.nativeElement.selectionEnd;
  }

  markdownText(markup: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[${markup}]` + this.text.slice(this.selectionStart, this.selectionEnd) +
    `[/${markup}]` + this.text.slice(this.selectionEnd);

    this.getPointerPosition();
  }

  setFontFamily(selection: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[FONT="${selection}"]` + this.text.slice(this.selectionStart, this.selectionEnd) +
    `[/FONT]` + this.text.slice(this.selectionEnd);
  }

  setFontSize(selection: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[SIZE=${selection}]` + this.text.slice(this.selectionStart, this.selectionEnd) +
    `[/SIZE]` + this.text.slice(this.selectionEnd);
  }

  setFontColor(selection: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[COLOR="${selection}"]` + this.text.slice(this.selectionStart, this.selectionEnd) +
    `[/COLOR]` + this.text.slice(this.selectionEnd);
    this.colorPicker.nativeElement.value = '#2E3539';
  }

  insertLink(url: string, value: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[URL=""]` + "" +
    '[/URL]' + this.text.slice(this.selectionEnd);
  }

  insertQuote(author: string, value: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[QUOTE=""]` + "" +
    '[/QUOTE]' + this.text.slice(this.selectionEnd);
  }

  insertImage(url: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[IMG]` + "" +
    '[/IMG]' + this.text.slice(this.selectionEnd);
  }

  addPost(event) {
    event.preventDefault();

    if (!this.postForm.valid) {
      return;
    }

    let user: User;
    this.auth.user.subscribe(_user => user = _user);

    const thread: Thread = {
      id: this.threadId
    };

    const post: Post = {
      text: this.message.value,
      thread: thread,
      author: user
    };

    this.threads.createThreadPost(post).subscribe(_post => {
      this.posts.push(post);
      this.messageBox.nativeElement.value = '';
    });
  }

  get message() {
    return this.postForm.get('message');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadId = params['threadId'];
    });
    this.getPosts();
    this.getThread();
    this.isLoggedIn$ = this.auth.isLoggedIn;

    this.postForm = this.formBuilder.group({
      message: ['', [
        Validators.required,
        Validators.maxLength(4000),
        Validators.minLength(2)
      ]]
    });

    this.postForm.valueChanges.subscribe(console.log);

    // this.getPointerPosition();
  }
}
