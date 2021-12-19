import { Injectable } from '@angular/core';
import { ItemCardapio, mocks } from './item.cardapio';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';

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

  getItemList(): Observable<ItemCardapio[]> {

    const querySnapshot = getDocs(collection(firestore, 'rest-casimiro')).then((result) => {
      let items: ItemCardapio[] = []
      result.docs.forEach((values) => items.push({
        nome: values.data()['nome'],
        foto: values.data()['foto'],
        preco: values.data()['preco'],
        descricao: values.data()['descricao'],
        categoria: values.data()['categoria']
      }))
      
      return items
    })

    const observable = from(querySnapshot);
    return observable
  }
}
