import { Injectable, EventEmitter } from '@angular/core';
import { ItemCardapio } from './item.cardapio';
import { collection, getDocs, setDoc, doc, query, where } from 'firebase/firestore';
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

  _checkItemExistence(form: ItemCardapio) : Observable<any> {
    let result: any = getDocs(query(collection(firestore, 'rest-casimiro'), where('nome', '==', form.nome)))
      .then(documents => {
        const docs = documents.docs
        if(docs.length >= 1){
          console.log('not setting')
          return false
        }else{
          console.log('setting')
          result = setDoc(doc(firestore, 'rest-casimiro', form.nome), form).then( outcome => {
            //success

            // updates list
            this.tellRefresh.emit()

            return true
          }, outcome => {
            //failure, internet
            return false
          })

          const observable = from(result)
          return observable
        }
      })
    
    const observable = from(result)
    return observable
  }

  itemCreationService(form: ItemCardapio): Observable<any> {
    let observable = this._checkItemExistence(form)
    // observable.subscribe(result => {
    //   console.log('result é:')
    //   console.log(result)
    //   return true
    // })

    return observable
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
