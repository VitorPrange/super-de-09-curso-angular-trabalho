import { Component, signal } from '@angular/core';
import { BrinquedoModel } from '../../models/brinquedo.model';

@Component({
  selector: 'app-brinquedo-listar',
  imports: [],
  templateUrl: './brinquedo-listar.html',
  styleUrl: './brinquedo-listar.scss',
})
export class BrinquedoListar {

  brinquedos = signal<BrinquedoModel[]>([]);

  ngOnInit() {
    this.carregarBrinquedos();
  }

  carregarBrinquedos(): void {
    const brinquedosString = localStorage.getItem('brinquedos');

    if (brinquedosString === null) {
      return;
    }

    const brinquedosLista = JSON.parse(brinquedosString) as BrinquedoModel[];

    const brinquedosOrdenados = brinquedosLista.sort((x, y) =>
      x.modelo.localeCompare(y.modelo)
    );

    this.brinquedos.set(brinquedosOrdenados);
  }
}