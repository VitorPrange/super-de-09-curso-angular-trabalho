import { Routes } from '@angular/router';
import { BrinquedoListar } from './brinquedos/brinquedo-listar/brinquedo-listar';

export const routes: Routes = [
  { path: 'brinquedos', loadComponent: () => BrinquedoListar }
];