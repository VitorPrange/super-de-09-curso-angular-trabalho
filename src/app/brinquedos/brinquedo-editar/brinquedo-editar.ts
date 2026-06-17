import { Component, signal } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';

@Component({
  selector: 'app-brinquedo-editar',
  imports: [FormsModule],
  templateUrl: './brinquedo-editar.html',
  styleUrl: './brinquedo-editar.scss',
})
export class BrinquedoEditar {
  brinquedo = signal<BrinquedoModel>({
    id: crypto.randomUUID(),
    marca: "",
    quantidade: null,
    preco: null,
    modelo: "",
  })

  // Método que é utilizado quando é instaciado um objeto da classe Produtoeditar
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    // activeRoute é a rota que o usuário está neste momento
    // snapshot é uma captura da rota atual com os dados daquela rota
    // paramMap é um dicionário com as variáveis da rota
    // get pegamos o id definido na rota /produtos/editar/:id
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    // Carregar a lista de produtos do localStorage
    const brinquedoStrings = localStorage.getItem("brinquedos");
    if (brinquedoStrings === null) {
      alert("Nenhum brinquedo cadastrado")
      router.navigate(["/brinquedos"]);
      return;
    }
    debugger
    const brinquedos = JSON.parse(brinquedoStrings) as BrinquedoModel[];
    const brinquedosEncontrados = brinquedos.filter(brinquedo => brinquedo.id === idParaEditar);
    if (brinquedosEncontrados.length === 0) {
      alert("Briquedo não econtrado")
      router.navigate(["/brinquedos"]);
      return;
    }

    this.brinquedo.set(brinquedosEncontrados[0]);

  }

  salvar(): void {
    const brinquedos = this.carregarBrinquedosDoLocalStorage();

    const indiceBrinquedoParaEditar = brinquedos.findIndex(x => x.id === this.brinquedo().id);
    brinquedos[indiceBrinquedoParaEditar].marca = this.brinquedo().marca;
    brinquedos[indiceBrinquedoParaEditar].modelo = this.brinquedo().modelo;
    brinquedos[indiceBrinquedoParaEditar].quantidade = this.brinquedo().quantidade;
    brinquedos[indiceBrinquedoParaEditar].preco = this.brinquedo().preco;

    const brinquedoString = JSON.stringify(brinquedos);
    localStorage.setItem("brinquedos", brinquedoString)

    alert("Cliente alterado com sucesso");

    this.router.navigate(["/clientes"]);
  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
    const brinquedosString = localStorage.getItem("brinquedos");

    if (brinquedosString === null) {
      return [];
    }

    return JSON.parse(brinquedosString) as BrinquedoModel[];
  }
}
