import { Injectable } from '@angular/core';
import { ItemCardapio } from './item.cardapio';

@Injectable({
  // TODO provide only when necessary
  providedIn: 'root'
})
export class CardapioMiddleBackService {
  constructor() { }

  item_creation_service(form: ItemCardapio) {
    console.log('eureka!')
    console.log(form)
  }
}
