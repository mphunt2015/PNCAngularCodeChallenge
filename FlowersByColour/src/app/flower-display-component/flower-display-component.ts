import { Component } from '@angular/core';
import { FlowerDataComponent } from '../flower-data-component/flower-data-component';

@Component({
  selector: 'app-flower-display-component',
  imports: [FlowerDataComponent],
  templateUrl: './flower-display-component.html',
  styleUrl: './flower-display-component.scss'
})
export class FlowerDisplayComponent {

}
