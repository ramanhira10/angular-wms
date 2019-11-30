import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  
  currentBalance = '729.00';
  allTransactions = [{
    transactionCard: 'AMEX',
    transactionName: 'Apple iPhone 6, 6b GB',
    transactionType: '',
    transactionNumber: 1234,
    transactionDate: '12 July 2019',
    transactionSettled: true,
    amount: 500,
    availableBalance: 500
  }, {
    transactionCard: 'VISA',
    transactionName: 'Apple iPhone 6, 6b GB',
    transactionType: 'Electronics',
    transactionNumber: 1233,
    transactionDate: '11 July 2019',
    transactionSettled: true,
    amount: 500,
    availableBalance: 1000
  }, {
    transactionCard: 'VISA',
    transactionName: 'Founds Added',
    transactionType: 'Payment',
    transactionNumber: 1232,
    transactionDate: '11 July 2019',
    transactionSettled: true,
    amount: 500,
    availableBalance: 1500
  }, {
    transactionCard: 'VISA',
    transactionName: 'Energy Bill',
    transactionType: 'Food&Health',
    transactionNumber: 1231,
    transactionDate: '11 July 2019',
    transactionSettled: true,
    amount: 500,
    availableBalance: 2000
  }];
  transactions = [];

  constructor(private cardsService: CardsService) {  }

  ngOnInit() {
    this.cardsService.cast.subscribe(card => {
      this.transactions = this.allTransactions.filter(txn => txn.transactionCard === card);
    });
  }
}
