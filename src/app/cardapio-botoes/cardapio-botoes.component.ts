import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';

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

    dialogRef.afterClosed().subscribe(result => {
      // TODO send request
    });
  }

  excluir_item():void {
    const dialogRef = this.dialog.open(ExcluirItemDialog, {width: '50%', height: 'auto'})

    dialogRef.afterClosed().subscribe(result => {
      // TODO send request
    });
  }

  // TODO send confirmation
  request_item_insertion(): void {

  }

}

@Component({
  selector: 'novo-item-dialog',
  templateUrl: 'novo-item-dialog.html'
})

export class NovoItemDialog {
  constructor(private cardapioMiddleBackService: CardapioMiddleBackService) {}
}

@Component({
  selector: 'excluir-item-dialog',
  templateUrl: 'excluir-item-dialog.html'
})

export class ExcluirItemDialog {}