import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  constructor() { }

  convertText(text: string): string {
    text = this.regexBold(text);
    text = this.regexItalic(text);
    text = this.regexUnderlined(text);
    text = this.regexFontFamily(text);
    text = this.regexFontSize(text);
    text = this.regexFontColor(text);
    text = this.regexAlignLeft(text);
    text = this.regexAlignCenter(text);
    text = this.regexAlignRight(text);
    text = this.regexLink(text);
    return text;
  }

  regexBold(text: string): string {
    const pattern = /\[B](.*?)\[\/B]/gmi;
    return text.replace(pattern, '<b>$1</b>');
  }

  regexItalic(text: string): string {
    const pattern = /\[I](.*?)\[\/I]/gmi;
    return text.replace(pattern, '<i>$1</i>');
  }

  regexUnderlined(text: string): string {
    const pattern = /\[U](.*?)\[\/U]/gmi;
    return text.replace(pattern, '<ins>$1</ins>');
  }

  regexFontFamily(text: string): string {
    const pattern = /\[FONT="?(\w+)"?](.*?)\[\/FONT]/gmi;
    return text.replace(pattern, '<font face="$1">$2</font>');
  }

  regexFontSize(text: string): string {
    const pattern = /\[SIZE="?(\d+)"?](.*?)\[\/SIZE]/gmi;
    return text.replace(pattern, function(full, param, value) {
      if (+param > 7) {
        return `<font size="7">${value}</font>`;
      }
      return `<font size="${param}">${value}</font>`;
    });
  }

  regexFontColor(text: string): string {
    const pattern = /\[COLOR="?([a-z0-9#]+)"?](.*?)\[\/COLOR]/gmi;
    return text.replace(pattern, '<font color="$1">$2</font>');
  }

  regexAlignLeft(text: string): string {
    const pattern = /\[LEFT](.*?)\[\/LEFT]/gmi;
    return text.replace(pattern, '<p align="left">$1</p>');
  }

  regexAlignCenter(text: string): string {
    const pattern = /\[CENTER](.*?)\[\/CENTER]/gmi;
    return text.replace(pattern, '<p align="center">$1</p>');
  }

  regexAlignRight(text: string): string {
    const pattern = /\[RIGHT](.*?)\[\/RIGHT]/gmi;
    return text.replace(pattern, '<p align="right">$1</p>');
  }

  regexAlignJustify(text: string): string {
    const pattern = /\[JUSTIFY](.*?)\[\/JUSTIFY]/gmi;
    return text.replace(pattern, '<p align="justify">$1</p>');
  }

  regexLink(text: string): string {
    const pattern = /\[URL="?([a-z0-9./:-]+)"?](.*?)\[\/URL]/gmi;
    return text.replace(pattern, '<a href="$1">$2</a>');
  }
}
