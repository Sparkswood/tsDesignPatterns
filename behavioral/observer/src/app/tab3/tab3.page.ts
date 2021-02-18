import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private _subject: BehaviorSubject<boolean>
  private _records: boolean[] = []

  get records() {
    return this._records
  }

  constructor() {
    this.initSubject();
  }

  private initSubject() {
    this._subject = new BehaviorSubject(true)
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
