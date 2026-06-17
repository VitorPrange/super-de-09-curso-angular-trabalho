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
}
