import { Component, OnInit } from '@angular/core';
import { ItemCardapio, mocks } from '../item.cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

export class CardapioComponent implements OnInit {

  //TODO remove later
  mock_stuff: ItemCardapio[]

  constructor() {
    this.mock_stuff = mocks
  }

  ngOnInit(): void {
    
  }

}
