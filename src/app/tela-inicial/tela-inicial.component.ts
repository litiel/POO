import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [],
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'] 
})
export class TelaInicialComponent {
  constructor(private router: Router) {}

  public fazerumpix() {
    this.router.navigate(['/tela-pix']);
  }

  public receberumpix() {
    this.router.navigate(['/tela-pix']);
  }

  public simularCdb() {
    this.router.navigate(['/calculo-cdb']); 
  }

  public navegarParaSimulador() {
    this.router.navigate(['/simulador']);
  }
}
