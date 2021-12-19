import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'basic-snackbar',
    template: '<p>qisso</p>'
})

export class BasicSnackBar {
    constructor(private _snackbar: MatSnackBar) { }

    openSnackBar(mensagem: string, acao: string) {
        this._snackbar.open(mensagem, acao)
    }
}