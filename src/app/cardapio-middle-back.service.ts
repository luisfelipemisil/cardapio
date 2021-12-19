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

  // ? analisa se já existe um Item de mesmo nome
  _checkItemExistence(form: ItemCardapio) : Observable<any> {
    // ? um parâmetro da query que filtra a busca
    let queryConstrain = where('nome', '==', form.nome)

    // ? a própria query, indicando aonde procurar o documento, e as restrições
    let queryRef = query(collection(firestore, 'rest-casimiro'), queryConstrain)

    // ? uma Promise, a ser resolvida
    let queryPromise = getDocs(queryRef)

    let result: any = queryPromise
      .then(documents => {
        const docs = documents.docs

        // ? Se o resultado tiver alguma entrada, então ele já existe no menu
        if(docs.length >= 1) {
          return 'exists' 
        }else{
          // ? Não existe entrada, sete o Doc com as informações do form
          let docPromise = setDoc(doc(firestore, 'rest-casimiro', form.nome), form)

          // ? resolva, caso positivo
          result = docPromise.then( () => {

            // ? emita aviso para atualizar a lista
            this.tellRefresh.emit()

            return 'ok'

            // ? emita o motivo da falha devido a conexão
          }, () => /*failure, internet*/ 'internet')

          const observable = from(result)
          return observable
        }
      })
    
    const observable = from(result)
    return observable
  }

  itemCreationService(form: ItemCardapio): Observable<any> {
    return this._checkItemExistence(form)

    // observable.subscribe(result => {
    //   console.log('result é:')
    //   console.log(result)
    //   return result
    // })

    // return observable
  }

  getItemList(): Observable<ItemCardapio[]> {
    // ? Pega todos os docs da coleção 'rest-casimiro' como um promise
    let queryPromise = getDocs(collection(firestore, 'rest-casimiro'))

    // ? Resolve o promise
    const querySnapshot = queryPromise.then((result) => {
      // ? Array a ser retornado
      let items: ItemCardapio[] = []

      // ? Dando push verbosamente, pois ele desconhece a semelhança dos tipos
      result.docs.forEach((values) => items.push({
        nome: values.data()['nome'],
        foto: values.data()['foto'],
        preco: values.data()['preco'],
        descricao: values.data()['descricao'],
        categoria: values.data()['categoria'],
      }))
      
      return items
    })

    // ? Retorna um observable enquanto a query não termina
    const observable = from(querySnapshot);
    return observable
  }

  categorias: string[] = []
}
