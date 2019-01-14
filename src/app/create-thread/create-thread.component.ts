import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {

  threadForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
    `[URL=${url}]` + value +
    '[/URL]' + this.text.slice(this.selectionEnd);
  }

  insertQuote(author: string, value: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[QUOTE=${author}]` + value +
    '[/QUOTE]' + this.text.slice(this.selectionEnd);
  }

  insertImage(url: string) {
    this.text = this.text.slice(0, this.selectionStart) +
    `[IMAGE]` + url +
    '[/IMAGE]' + this.text.slice(this.selectionEnd);
  }

  ngOnInit() {
    this.threadForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)
      ]],
      message: ['', [
        Validators.required,
        Validators.maxLength(400),
        Validators.minLength(2)
      ]]
    });

    this.threadForm.valueChanges.subscribe(console.log);

    this.getPointerPosition();
  }

  get title() {
    return this.threadForm.get('title');
  }

  get message() {
    return this.threadForm.get('message');
  }
}
