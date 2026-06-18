import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquedo-cadastrar/brinquedo-cadastrar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrinquedoCadastrar, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('super-dev-09-curso-angular-trabalho');
}
