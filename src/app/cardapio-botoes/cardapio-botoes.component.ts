import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-botoes',
  templateUrl: './cardapio-botoes.component.html',
  styleUrls: ['./cardapio-botoes.component.css']
})
export class CardapioBotoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  novo_item(): void {
    alert('WIP!')
  }

  excluir_item():void {
    alert('WIP!')
  }

}
