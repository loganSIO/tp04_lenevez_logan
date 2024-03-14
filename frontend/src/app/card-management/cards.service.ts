import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from './cards'

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cards: Card[] = [
    { id: 1, name: 'Toto tata', code: '1234 5678 9012 3456', ccv: '123', expiration: '12/26' },
  ];

  constructor() { }

  getCards(): Observable<Card[]> {
    return of(this.cards);
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  deleteCard(id: number): void {
    this.cards = this.cards.filter(c => c.id !== id);
  }
}