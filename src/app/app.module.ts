import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppComponent } from './app.component';
import { SimuladorFinanciamentoComponent } from './simulador-financiamento/simulador-financiamento.component';
import { routes } from './app.routes'; // Certifique-se de que está importando a variável correta

@NgModule({
  declarations: [AppComponent, SimuladorFinanciamentoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configura as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

