import { Component, OnInit } from '@angular/core';
import { Card } from '../cards';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardsService.getCards().subscribe({
      next: (cards) => this.cards = cards,
      error: (err) => console.error('Error while fetching cards ', err)
    });
  }

  deleteCard(id: number): void {
    this.cardsService.deleteCard(id);
    this.getCards();
  }

  editCard(id: number): void {
    console.log('Edit card ', id);
  }
}