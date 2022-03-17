import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {


  //Instance of the Subject from rxjs
  subject = new Subject();
  constructor() { }
  sendMsg(product)
  {
    console.log(product);
    this.subject.next(product);//Triggering an event
  }

  getMsg()
  {
    return this.subject.asObservable();
  }
}
