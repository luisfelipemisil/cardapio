import { Component, OnInit } from '@angular/core';
import { ItemCardapio, mocks } from '../item.cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

// TODO this should check for changes in the server periodically (even better if it emits automatically)
// TODO listen to changes from the interaction button pop-ups
export class CardapioComponent implements OnInit {

  //TODO remove later
  mock_stuff: ItemCardapio[]

  constructor() {
    this.mock_stuff = mocks
  }

  ngOnInit(): void {
    
  }

}
