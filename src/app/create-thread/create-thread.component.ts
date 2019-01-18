import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Thread } from '../models/Thread';
import { AuthService } from '../shared/auth.service';
import { User } from '../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcategory } from '../models/Subcategory';
import { ThreadsService } from '../shared/threads.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {

  threadForm: FormGroup;
  subcategoryId: number;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private thread: ThreadsService,
    private router: Router) { }

  availableFontFamilies = ['Arial', 'Times New Roman', 'Verdana', 'Comic sans MS', 'WildWest', 'Bedrock'];

  @ViewChild('message') messageBox: ElementRef;
  @ViewChild('fontColor') colorPicker: ElementRef;

  text = '';
  selectionStart = 0;
  selectionEnd = 0;

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
    `[URL=""]` + value +
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subcategoryId = params['subcategoryId'];
    });

    this.threadForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)
      ]],
      message: ['', [
        Validators.required,
        Validators.maxLength(5000),
        Validators.minLength(2)
      ]]
    });

    this.threadForm.valueChanges.subscribe(console.log);

    this.getPointerPosition();
  }

  addThread(event) {
    event.preventDefault();

    if (!this.threadForm.valid) {
      return;
    }

    let user: User;
    this.auth.user.subscribe(_user => user = _user);
    const subcategory: Subcategory = {
      id: this.subcategoryId
    };

    const thread: Thread = {
      title: this.title.value,
      author: user,
      subcategory: subcategory
    };

    this.thread.createThread(thread).subscribe(newThread => {
      const post: Post = {
        text: this.message.value,
        thread: newThread,
        author: user
      };

      this.thread.createThreadPost(post).subscribe(_post =>
        this.router.navigate(['/threads/' + newThread.id + '/' + newThread.slug]));
    });
  }

  get title() {
    return this.threadForm.get('title');
  }

  get message() {
    return this.threadForm.get('message');
  }
}
