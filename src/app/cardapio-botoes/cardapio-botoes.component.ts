import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ItemCardapio } from '../item.cardapio';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private cardapioMiddleBackService: CardapioMiddleBackService, public dialogRef: MatDialogRef<NovoItemDialog>, private fb: FormBuilder, private _snackbar: MatSnackBar) {
    // TODO refactor this
    this.tellRefresh = this.cardapioMiddleBackService.tellRefresh

    this.formControl = this.formControl

    this.formControl.setValue({
      nome: '',
      foto: '',
      preco: 0,
      descricao: '',
      categoria: ''
    })
  }

  tellRefresh: any

  formControl = this.fb.group({
    nome: ['', Validators.required],
    foto: [''], //TODO correct validation in photo
    preco: [0, [Validators.required, Validators.min(1), Validators.pattern(/[0-9]/)]],
    descricao: ['', Validators.required],
    categoria: ['', Validators.required],
  })

  getErrorMessage(field: string): any {
    let controls = this.formControl.controls
    if(field == 'nome' && controls[field].invalid){
      return 'Insira um nome'
    }else if(field == 'preco' && controls[field].invalid){
      if(controls[field].hasError('required')) return 'Insira um preço'
      if(controls[field].hasError('min')) return 'Insira um valor maior'
      if(controls[field].hasError('pattern')) return 'Insira um valor válido'
    }else if(field == 'categoria' && controls[field].invalid){
      return 'Insira uma categoria'
    }else if(field == 'descricao' && controls[field].invalid){
      return 'Insira uma descrição'
    }else if(field == 'foto' && controls[field].invalid){
      return 'Insira uma foto'
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(form: ItemCardapio):void { // ? primeiro ele roda aqui
    this.cardapioMiddleBackService.itemCreationService(form).subscribe((result: any) => {
      console.log('resultado é:')
      console.log(result)
      this._snackbar.open('Sucesso!', 'Fechar')
    })
  }
}

@Component({
  selector: 'excluir-item-dialog',
  templateUrl: 'excluir-item-dialog.html'
})

export class ExcluirItemDialog {}