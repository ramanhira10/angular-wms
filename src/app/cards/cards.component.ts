import { Component, OnInit } from '@angular/core';
import Cards from '../../data/Cards';
import { Card } from './card';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

  title = 'My Wallets';
  
  cards = [
    new Card('VISA', '1234123412342562', '12/19'),
    new Card('AMEX', '2234223422321001', '12/19'),
    new Card('MASTERCARD', '3234323432348335', '11/19')
  ];

  cardClicked (card) {
    this.cardsService.selectedCard(card.cardType);
  }
}
