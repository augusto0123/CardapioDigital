import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { CategoriaCorPipe } from './pipes/categoria-cor.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardapioComponent,
    CategoriaCorPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
