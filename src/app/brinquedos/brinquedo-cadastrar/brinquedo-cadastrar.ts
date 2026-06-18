import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brinquedo-cadastrar',
  imports: [FormsModule, RouterLink],
  templateUrl: './brinquedo-cadastrar.html',
  styleUrl: './brinquedo-cadastrar.scss',
})
export class BrinquedoCadastrar {
  brinquedo = signal<BrinquedoModel>({
    id: crypto.randomUUID(),
    marca: '',
    modelo: '',
    quantidade: null,
    preco: null
  });

  salvar(): void {
    const brinquedos = this.carregarBrinquedosDoLocalStorage();

    brinquedos.push(this.brinquedo());

    const brinquedoString = JSON.stringify(brinquedos);
    localStorage.setItem("brinquedos", brinquedoString)

    alert("Brinquedo cadastrado com sucesso");

    this.brinquedo.set({
    id: crypto.randomUUID(),
    marca: '',
    modelo: '',
    quantidade: null,
    preco: null
  });

  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
    const brinquedosString = localStorage.getItem("brinquedos");

    if (brinquedosString === null) {
      return [];
    }

    return JSON.parse(brinquedosString) as BrinquedoModel[];
  }
}
