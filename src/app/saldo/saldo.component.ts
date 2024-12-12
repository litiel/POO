import { Component } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {

  // Método para visualizar o saldo de uma conta específica
  visualizarSaldo(tipo: string) {
    console.log('Visualizando saldo para:', tipo);
    // Aqui você pode adicionar a lógica para exibir os detalhes de cada tipo de conta
  }

  // Método para realizar uma transferência
  fazerTransferencia() {
    console.log('Fazendo uma transferência...');
    // Adicione aqui a lógica para fazer a transferência
  }

  // Método para realizar um depósito
  depositar() {
    console.log('Fazendo um depósito...');
    // Adicione aqui a lógica para realizar um depósito
  }

  // Método para consultar o extrato
  consultarExtrato() {
    console.log('Consultando extrato...');
    // Adicione aqui a lógica para consultar o extrato
  }
}
