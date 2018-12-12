import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../models/Thread';

@Component({
  selector: 'app-thread-label',
  templateUrl: './thread-label.component.html',
  styleUrls: ['./thread-label.component.css']
})
export class ThreadLabelComponent implements OnInit {

  constructor() { }

  @Input()
  thread: Thread;

  ngOnInit() {
  }

}
