import { Component, Input, OnInit } from '@angular/core';
import { ItemCardapioList, CategoriaCardapio } from '../item.cardapio';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { map, Observer } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

// TODO this should check for changes in the server periodically (even better if it emits automatically)
export class CardapioComponent implements OnInit {

  items: ItemCardapioList[]

  itensCategoria: CategoriaCardapio[]

  constructor(private cardapioMiddleBackService: CardapioMiddleBackService) {
    this.items = []
    this.itensCategoria = []
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
      this.items = []
      items.forEach(item => {
        let trueItem: any = item
        trueItem['checked'] = false
        this.items.push(trueItem)
      })
      
      this.itensCategoria = this.sortCategoria(this.items)
    })
  }

  sortCategoria(itens: ItemCardapioList[]): CategoriaCardapio[] {
    //categoria
    //itens q pertencem a categoria
    let returnable: CategoriaCardapio[] = []
    let categorias = [...new Set(itens.map(item => item.categoria))]
    this.cardapioMiddleBackService.categorias = categorias // TODO check if this binds

    categorias.forEach(categoria => {
      let temp = itens.filter(item => item.categoria == categoria)
      returnable.push({categoria: categoria, itens: temp})
    })

    return returnable
  }

}
