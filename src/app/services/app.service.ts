import { Injectable } from '@angular/core';
import { IImage } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  imageSourse: string =
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png';

  leftBoxImages: IImage[] = [
    {
      url: this.imageSourse,
      number: 1,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 2,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 3,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 4,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 5,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 6,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 7,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 8,
      checked: false,
    },
  ];
  // Array of images in the right box
  rightBoxImages: IImage[] = [
    {
      url: this.imageSourse,
      number: 9,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 10,
      checked: false,
    },
    {
      url: this.imageSourse,
      number: 11,
      checked: false,
    },
  ];
}
