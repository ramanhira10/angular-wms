import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private card = new BehaviorSubject<string>('VISA');
  cast = this.card.asObservable();

  constructor() { }

  selectedCard(cardType){
    this.card.next(cardType);
  }
}
