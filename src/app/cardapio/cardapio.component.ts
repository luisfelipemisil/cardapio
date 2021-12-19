import { Component, Input, OnInit } from '@angular/core';
import { ItemCardapioList } from '../item.cardapio';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

// TODO this should check for changes in the server periodically (even better if it emits automatically)
export class CardapioComponent implements OnInit {

  items: ItemCardapioList[]

  constructor(private cardapioMiddleBackService: CardapioMiddleBackService) {
    this.items = []
    this.cardapioMiddleBackService.tellRefresh.subscribe(() => {
      this.feedList()
    })
  }

  ngOnInit(): void {
    this.feedList()
  }

  feedList(): void {
    // change everytime getItemList runs
    this.cardapioMiddleBackService.getItemList().subscribe(items => {
      items.forEach(item => {
        let trueItem: any = item
        trueItem['checked'] = false
        this.items.push(trueItem)
      })
    })
  }

}
