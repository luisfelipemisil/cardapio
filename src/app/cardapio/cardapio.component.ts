import { Component, OnInit } from '@angular/core';
import { ItemCardapio } from '../item.cardapio';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

// TODO this should check for changes in the server periodically (even better if it emits automatically)
// TODO listen to changes from the interaction button pop-ups
export class CardapioComponent implements OnInit {

  //TODO remove later
  items: ItemCardapio[]

  constructor(private cardapioMiddleBackService: CardapioMiddleBackService) {
    this.items = []
  }

  ngOnInit(): void {
    this.feedList()
  }

  feedList(): void {
    this.cardapioMiddleBackService.getItemList()
      .subscribe(items => this.items = items)
  }

}
