import { Routes } from '@angular/router';
import { BrinquedoListar } from './brinquedos/brinquedo-listar/brinquedo-listar';
import { BrinquedoCadastrar } from './brinquedos/brinquedo-cadastrar/brinquedo-cadastrar';
import { BrinquedoEditar } from './brinquedos/brinquedo-editar/brinquedo-editar';

export const routes: Routes = [
  { path: 'listar', loadComponent: () => BrinquedoListar },
  { path: 'cadastrar', loadComponent: () => BrinquedoCadastrar },
  { path: 'editar/:id', loadComponent: () => BrinquedoEditar },
];