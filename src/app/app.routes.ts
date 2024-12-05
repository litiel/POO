import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './autocadastro/autocadastro.component';
import { TelaPixComponent } from './tela-pix/tela-pix.component';
import { CalculoCdbComponent } from './calculo-cdb/calculo-cdb.component';
import { SimuladorFinanciamentoComponent } from './simulador-financiamento/simulador-financiamento.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'tela-pix', component: TelaPixComponent },
  { path: 'calculo-cdb', component: CalculoCdbComponent},
  { path: 'simulador', component: SimuladorFinanciamentoComponent }
];


