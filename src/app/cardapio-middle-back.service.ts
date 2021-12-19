import { Injectable, EventEmitter } from '@angular/core';
import { ItemCardapio } from './item.cardapio';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { Observable, from } from 'rxjs';

@Injectable({
  // TODO provide only when necessary
  providedIn: 'root'
})
export class CardapioMiddleBackService {
  constructor() { }

  // TODO change to subject so its not necessary to 
  tellRefresh = new EventEmitter<any> (true);

  itemCreationService(form: ItemCardapio): void {
    // TODO don't allow overwriting
    const observable = from(setDoc(doc(firestore, 'rest-casimiro', form.nome), form))
    
    // updates list
    this.tellRefresh.emit()
    console.log(this.tellRefresh)

    //TODO set this to return what feedback should give
    // return true
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
