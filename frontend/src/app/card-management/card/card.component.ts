import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Card } from '../cards';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-management',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardForm  = this.fb.group({
    name: ['', [Validators.required]],
    code: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    ccv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    expiration: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
  });

  constructor(private fb: FormBuilder, private cardsService: CardsService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const id = Math.floor(Math.random() * 1000);
    this.cardsService.addCard({ id, ...this.cardForm.value } as Card);
  }
}