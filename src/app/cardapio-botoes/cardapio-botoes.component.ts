import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { ItemCardapio } from '../item.cardapio';

@Component({
  selector: 'app-cardapio-botoes',
  templateUrl: './cardapio-botoes.component.html',
  styleUrls: ['./cardapio-botoes.component.css']
})

// TODO emit to the list when changes are made, telling it to refetch the list
export class CardapioBotoesComponent implements OnInit {

  constructor(private cardapioMiddleBackService: CardapioMiddleBackService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  novo_item(): void {
    const dialogRef = this.dialog.open(NovoItemDialog, {width: '50%', height: 'auto'})
  }

  excluir_item():void {
    const dialogRef = this.dialog.open(ExcluirItemDialog, {width: '50%', height: 'auto'}) 
  }

}

@Component({
  selector: 'novo-item-dialog',
  templateUrl: 'novo-item-dialog.html'
})

export class NovoItemDialog {
  constructor(private cardapioMiddleBackService: CardapioMiddleBackService, public dialogRef: MatDialogRef<NovoItemDialog>) {
    this.item_creation_service = this.cardapioMiddleBackService.item_creation_service

    this.form = this.form
  }

  item_creation_service: any = () => {}

  form: ItemCardapio = {
    nome: '',
    foto: '',
    preco: 0,
    descricao: '',
    categoria: ''
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'excluir-item-dialog',
  templateUrl: 'excluir-item-dialog.html'
})

export class ExcluirItemDialog {}