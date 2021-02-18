import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private _subject: ReplaySubject<boolean>
  private _records: boolean[] = []

  get records() {
    return this._records
  }

  constructor() {
    this.initSubject();
  }

  private initSubject() {
    this._subject = new ReplaySubject()
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
