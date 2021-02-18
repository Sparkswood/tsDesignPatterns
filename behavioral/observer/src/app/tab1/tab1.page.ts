import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private _subject: Subject<boolean>
  private _records: boolean[] = []

  get records() {
    return this._records
  }

  constructor() {
    this.initSubject();
  }

  private initSubject() {
    this._subject = new Subject()
  }

  subscribeSubject() {
    this._subject.subscribe(value => {
      this._records.push(value);
    })
  }

  unsubscribeSubject() {
    this._subject.unsubscribe()
    this.initSubject()
    this._records = []
  }

  setSubject(value: boolean) {
    console.log(this._subject)
    this._subject.next(value)
  }

}
