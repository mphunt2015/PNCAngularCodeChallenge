import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';

@Component({
  selector: 'app-flower-data-component',
  imports: [],
  templateUrl: './flower-data-component.html',
  styleUrl: './flower-data-component.scss'
})
export class FlowerDataComponent implements OnInit {
  http = inject(HttpClient);
  flowerData: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  readonly API_KEY: string = 'a5e95177da353f58113fd60296e1d250';

  fetchData() {
    this.http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&text=flowers&api_key=${this.API_KEY}&format=json&nojsoncallback=1&page=1&per_page=20`).subscribe(data => {
      console.log(data);
      this.flowerData.push(data);
    });
  }
}
