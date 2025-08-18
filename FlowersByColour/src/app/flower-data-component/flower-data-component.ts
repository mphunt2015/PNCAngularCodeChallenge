import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.fetchAllData();
  }

  readonly API_KEY: string = 'a5e95177da353f58113fd60296e1d250';

  // Fetch all flower data without color filtering
  fetchAllData() {
    this.http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&text=flowers&api_key=${this.API_KEY}&format=json&nojsoncallback=1&page=1&per_page=20`).subscribe(data => {
      console.log(data);
      this.flowerData.push(data);
      this.updatePhotosObject();
    });
  }

  // Color code for filtering
  readonly colorCodes = ["'',0,5,8"];

  // Default to no color filter
  colorCode: string = this.colorCodes[0];

  filterByAll() {
    this.colorCode = this.colorCodes[0];
    this.fetchFilteredData();
  }

  filterByRed() {
    this.colorCode = this.colorCodes[1];
    this.fetchFilteredData();
  }
  
  filterByGreen() {
    this.colorCode = this.colorCodes[2];
    this.fetchFilteredData(); 
  }

  filterByBlue() {
    this.colorCode = this.colorCodes[3];
    this.fetchFilteredData();
  }

  // Fetch flower data filtered by color
  fetchFilteredData() {
    this.http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&text=red+flowers&api_key=${this.API_KEY}&format=json&nojsoncallback=1&page=1&per_page=20&color_codes=${this.colorCode}`).subscribe(data => {
      console.log(data);
      this.flowerData.push(data);
    });
  }

  // Array to hold all photo objects
  photos: any[] = [];

  // Iterate through flowerData to extract photo objects
  updatePhotosObject(): void {
    this.photos = [];
    for (const flower of this.flowerData) {
      // Check if flower and flower.photos.photo exist
      if (flower?.photos?.photo) {
        const photoSet = flower.photos.photo;
        this.photos = this.photos.concat(photoSet);
        if (photoSet.length > 0) {
          this.getPhotoURL(photoSet[0]);
        }
        else {
          console.warn('No photos found in the flower data');
        }
      }
    }
  }

  // Construct photo URL from photo object
  getPhotoURL(imgObj: any): string {
    return 'https://farm' + imgObj.farm + '.staticflickr.com/' + imgObj.server +'/' + imgObj.id + '_' +imgObj.secret + '.jpg';
  }
}
