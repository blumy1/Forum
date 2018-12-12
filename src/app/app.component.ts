import { Component } from '@angular/core';
import { ThreadsService } from './shared/threads.service';
import { log } from 'util';
import { Thread } from './models/Thread';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

}
