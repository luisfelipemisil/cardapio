import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { ItemCardapio } from '../item.cardapio';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cardapio-botoes',
  templateUrl: './cardapio-botoes.component.html',
  styleUrls: ['./cardapio-botoes.component.css']
})

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
    this.itemCreationService = this.cardapioMiddleBackService.itemCreationService

    this.tellRefresh = this.cardapioMiddleBackService.tellRefresh

    this.form = this.form

    this.formControl.setValue({
      nome: '',
      foto: '',
      preco: 0,
      descricao: '',
      categoria: ''
    })
  }

  // TODO correct types here
  // TODO refactor this
  itemCreationService: any = () => {}

  tellRefresh: any

  formControl = new FormGroup({
    nome: new FormControl(''),
    foto: new FormControl(''),
    preco: new FormControl(0),
    descricao: new FormControl(''),
    categoria: new FormControl('')
  })

  form: ItemCardapio = {
    nome: '',
    foto: '',
    preco: 0,
    descricao: '',
    categoria: ''
  }

  onSubmit(): void {
    console.log('RODEI VIU?')
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