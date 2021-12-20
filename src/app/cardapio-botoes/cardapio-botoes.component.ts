import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { ItemCardapio } from '../item.cardapio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NovoItemDialog } from './novo-item-dialog';
import { ExcluirItemDialog } from './excluir-item-dialog';
import { NovaCategoriaDialog } from './nova-categoria-dialog'

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

  excluir_item(): void {
    const dialogRef = this.dialog.open(ExcluirItemDialog, {width: '50%', height: 'auto'}) 
  }

  nova_categoria(): void {
    const dialogRef = this.dialog.open(NovaCategoriaDialog, {width: '50%', height: 'auto'})
  }

}