import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardapioMiddleBackService } from '../cardapio-middle-back.service';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { ItemCardapio } from '../item.cardapio';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  
      this.categorias = []

      this.invalidForm = this.invalidForm
      
      this.cardapioMiddleBackService.getCategoryList().subscribe(lista => {
        this.categorias = lista
      })
      
      this.novaCategoria = ''
    }
  
    novaCategoria: string
  
    categorias: string[]
  
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
  
    invalidForm: boolean = false
  
    onSubmit(form: ItemCardapio):void { // ? primeiro ele roda aqui
      this.cardapioMiddleBackService.itemCreationService(form).subscribe((result: any) => {
  
        // ? Única resposta que não envolve outro observable
        if(result == 'exists'){
          this.invalidForm = true
          this._snackbar.open('Algo deu errado!', 'Fechar', {duration: 2500})
  
          setTimeout(() => this.invalidForm = false, 2500)
        }else{
          // ? Dê subscribe, pois vai retornar um observable
          result.subscribe((result2: any) => {
            // ? Caso segunda resposta seja um OK
            if(result2 = 'ok'){
              this._snackbar.open('Sucesso!', 'Fechar', {duration: 2500})
              this.closeDialog()
            // ? Caso não seja
            }else if(result == 'internet'){
              this._snackbar.open('Verifique sua conexão!', 'Fechar', {duration: 2500})
            }
          })
        }
  
      })
    }
}