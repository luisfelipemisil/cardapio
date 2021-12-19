import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { ItemCardapio } from '../item.cardapio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NovoItemDialog } from './novo-item-dialog';
import { ExcluirItemDialog } from './excluir-item-dialog';

@Component({
    selector: 'nova-categoria-dialog',
    templateUrl: 'nova-categoria-dialog.html'
  })
  
  export class NovaCategoriaDialog {
    constructor(private cardapioMiddleBackService: CardapioMiddleBackService, private _snackbar: MatSnackBar, public dialogRef: MatDialogRef<NovoItemDialog>) {
      this.categoria = this.categoria
      this.invalidForm = this.invalidForm
    }
  
    categoria = new FormControl('')
  
    sendCategoria(): void {
      let categoria = this.categoria.value
  
      let resultado = this.cardapioMiddleBackService.checkCategoryExistence(categoria)
      resultado.subscribe(exists => {
        if(exists){
            // ? negue, continue na página
    
            this.invalidForm = true
            setTimeout(() => this.invalidForm = false, 2500)
        }else{
            let result = this.cardapioMiddleBackService.addCategory(categoria)

            result.subscribe(outcome => {
                if(outcome){
                    this._snackbar.open('Categoria criada!', 'Fechar', {duration: 2500})
                    this.closeDialog()
                }else if(!outcome){
                    this._snackbar.open('Erro de conexão', 'Fechar', {duration: 2500})
                }
            })
        }
      })
    }
    
    closeDialog(): void {
      this.dialogRef.close();
    }
  
    invalidForm: boolean = false
  }