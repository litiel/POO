import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent {
  constructor(private router: Router) {}

  // Função para navegar e visualizar um tipo de cartão
  visualizarCartao(tipo: string) {
    if (tipo === 'credito') {
      this.router.navigate(['/cartao-credito']);
    } else if (tipo === 'debito') {
      this.router.navigate(['/cartao-debito']);
    } else if (tipo === 'virtual') {
      this.router.navigate(['/cartao-virtual']);
    }
  }

  // Função para solicitar um novo cartão
  solicitarCartao() {
    alert('Solicitando um novo cartão...');
    // Aqui você pode adicionar a lógica para solicitar o cartão
  }

  // Função para bloquear um cartão
  bloquearCartao() {
    alert('Bloqueando o cartão...');
    // Aqui você pode adicionar a lógica para bloquear o cartão
  }
}
