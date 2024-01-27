import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { IImage } from './models/image.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'drag-drop-images';
  // Array of images in the left box
  leftBoxImages: IImage[] = [];
  // Array of images in the right box
  rightBoxImages: IImage[] = [];
  checkedImages: number = 0;

  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    this.leftBoxImages = this._appService.leftBoxImages;
    this.rightBoxImages = this._appService.rightBoxImages;
  }

  // Event handler for drag start
  onDragStart(
    event: DragEvent,
    image: { url: string; number: number; checked?: boolean }
  ) {
    //the user can't drag-drop the image till checking the input box
    if (image.checked) {
      // Set image data in the dataTransfer object
      event.dataTransfer?.setData('text/plain', image.url);
      event.dataTransfer?.setData('text/number', image.number.toString());
    }
    if(!image.checked){
      alert('Please check the box to allow dragging the image from left to right');
    }
  }

  // Event handler for drop
  onDrop(event: DragEvent, box: string) {
    const imageUrl = event.dataTransfer?.getData('text/plain');
    const number = event.dataTransfer?.getData('text/number');
    // Check if the required data is present and the drop target is the right box
    if (imageUrl && number && box === 'right') {
      const parsedNumber = parseInt(number);
      // Find the image in the left box based on URL and number
      const image = this.leftBoxImages.find(
        (img) => img.url === imageUrl && img.number === parsedNumber
      );

      // If the image is found, add it to the right box
      if (image) {
        this.rightBoxImages.push({ url: image.url, number: image.number });
        image.checked = false;
        this.checkedImages = 0;
        this.removeImageFromLeftBox(image);
      }
    }
  }

  //allow user to check only single image to drag and drop
  addToCheckedItems($event:any) {
    if (this.checkedImages === 0 && $event?.target?.checked) ++this.checkedImages;
    else if(!$event?.target?.checked) --this.checkedImages;
  }

  // Event handler to allow dropping
  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  // Remove image from the left box
  removeImageFromLeftBox(image: IImage) {
    const index = this.leftBoxImages.findIndex(
      (img) => img.url === image.url && img.number === image.number
    );
    // If the image is found, remove it from the array
    if (index !== -1) {
      this.leftBoxImages.splice(index, 1);
    }
  }
}
