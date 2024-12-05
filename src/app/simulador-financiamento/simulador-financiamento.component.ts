import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simulador-financiamento',
  standalone: true,
  templateUrl: './simulador-financiamento.component.html',
  styleUrls: ['./simulador-financiamento.component.css'],
  imports: [CommonModule, FormsModule], // Inclua CommonModule e FormsModule
})
export class SimuladorFinanciamentoComponent {
  valorFinanciado: number = 0;
  quantidadeMeses: number = 0;
  prestacao: number | null = null;

  calcularPrestacao() {
    const taxaJuros = 0.019; // Taxa fixa de 1,9% ao mês
    const fator = Math.pow(1 + taxaJuros, this.quantidadeMeses);
    this.prestacao = this.valorFinanciado * (taxaJuros * fator) / (fator - 1);
  }
}