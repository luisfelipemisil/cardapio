import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ItemCardapioList } from '../item.cardapio';

@Component({
  selector: 'app-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.css']
})

export class ItemCardapioComponent implements OnInit {

  @Input() item:ItemCardapioList;

  constructor() { 
    this.item = {
      nome: '',
      foto: '',
      preco: 0,
      descricao: '',
      categoria: '',
      checked: false
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
