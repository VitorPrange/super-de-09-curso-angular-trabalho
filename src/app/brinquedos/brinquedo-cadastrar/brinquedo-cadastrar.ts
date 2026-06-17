import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';

@Component({
  selector: 'app-brinquedo-cadastrar',
  imports: [FormsModule],
  templateUrl: './brinquedo-cadastrar.html',
  styleUrl: './brinquedo-cadastrar.scss',
})
export class BrinquedoCadastrar {
  brinquedo = signal<BrinquedoModel>({
    id: '',
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

  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
    const brinquedosString = localStorage.getItem("Brinquedos");

    if (brinquedosString === null) {
      return [];
    }

    return JSON.parse(brinquedosString) as BrinquedoModel[];
  }
}
