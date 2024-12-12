import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './autocadastro/autocadastro.component';
import { TelaPixComponent } from './tela-pix/tela-pix.component';
import { CalculoCdbComponent } from './calculo-cdb/calculo-cdb.component';
import { SimuladorFinanciamentoComponent } from './simulador-financiamento/simulador-financiamento.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { SaldoComponent } from './saldo/saldo.component'; // Importar o componente de Saldo

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'tela-pix', component: TelaPixComponent },
  { path: 'calculo-cdb', component: CalculoCdbComponent },
  { path: 'simulador', component: SimuladorFinanciamentoComponent },
  { path: 'cartoes', component: CartoesComponent },
  { path: 'saldo', component: SaldoComponent }  // Rota para Saldo
];
