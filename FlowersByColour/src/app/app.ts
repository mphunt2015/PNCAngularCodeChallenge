import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowerDataComponent } from './flower-data-component/flower-data-component';
import { FlowerDisplayComponent } from "./flower-display-component/flower-display-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlowerDataComponent, FlowerDisplayComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FlowersByColour');
}
