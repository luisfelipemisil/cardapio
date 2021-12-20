import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'; //TODO put the specifics in a separate module?
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';


// Custom modules
import {CardapioComponent} from './cardapio/cardapio.component';
import { ItemCardapioComponent } from './item-cardapio/item-cardapio.component';
import { CardapioBotoesComponent } from './cardapio-botoes/cardapio-botoes.component'
import { BasicSnackBar } from './basic.snackbar';
import { NovoItemDialog } from './cardapio-botoes/novo-item-dialog'
import { ExcluirItemDialog } from './cardapio-botoes/excluir-item-dialog'
import { NovaCategoriaDialog } from './cardapio-botoes/nova-categoria-dialog'

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    ItemCardapioComponent,
    CardapioBotoesComponent,
    NovoItemDialog,
    ExcluirItemDialog,
    BasicSnackBar,
    NovaCategoriaDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
