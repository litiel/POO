import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartoesComponent } from './cartoes/cartoes.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { CreditoComponent } from './credito/credito.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { SaldoComponent } from './saldo/saldo.component';  // Importar o componente de Saldo

const routes: Routes = [
  { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' },  // Redireciona a raiz para Tela Inicial
  { path: 'tela-inicial', component: TelaInicialComponent },      // Rota para a Tela Inicial
  { path: 'cartoes', component: CartoesComponent },               // Rota para Cartões
  { path: 'investimentos', component: InvestimentosComponent },   // Rota para Investimentos
  { path: 'credito', component: CreditoComponent },               // Rota para Crédito
  { path: 'saldo', component: SaldoComponent },                   // Adiciona a rota para a tela de Saldo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura o roteamento para a aplicação
  exports: [RouterModule]                    // Exporta o módulo de roteamento para que outras partes do app usem
})
export class AppRoutingModule {}
