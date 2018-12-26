import { Component, OnInit } from '@angular/core';
import { ThreadsService } from './shared/threads.service';
import { log } from 'util';
import { Thread } from './models/Thread';
import { RegexService } from './shared/regex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private regex: RegexService) { }

  ngOnInit(): void {
    console.log(this.regex.convertText('[B][I]LoL[/I][/B][u]dssd[/u]'));
  }
}
