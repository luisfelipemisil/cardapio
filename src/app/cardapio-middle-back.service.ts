import { Injectable } from '@angular/core';
import { ItemCardapio } from './item.cardapio';

@Injectable({
  // TODO provide only when necessary
  providedIn: 'root'
})
export class CardapioMiddleBackService {
  constructor() { }

  itemCreationService(form: ItemCardapio): void {
    console.log('eureka!')
    console.log(form)
  }

  getItemList(): ItemCardapio[] {

    return []
  }
}
