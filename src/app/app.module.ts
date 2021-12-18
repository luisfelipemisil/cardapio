import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'; //TODO put the specifics in a separate module?
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

// Custom modules
import {CardapioComponent} from './cardapio/cardapio.component';
import { ItemCardapioComponent } from './item-cardapio/item-cardapio.component';
import { CardapioBotoesComponent } from './cardapio-botoes/cardapio-botoes.component'

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    ItemCardapioComponent,
    CardapioBotoesComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
