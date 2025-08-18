import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowerDataComponent } from './flower-data-component/flower-data-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlowerDataComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FlowersByColour');
}
