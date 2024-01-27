import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drag-drop-images';
  leftBoxImages: { url: string; number: number }[] = [
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 1 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 2 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 3 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 4 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 5 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 6 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 7 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 8 },
  ];


  rightBoxImages:  { url: string; number: number }[] = [
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 9 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 10 },
    { url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png', number: 11 },
  ];

  onDragStart(event: DragEvent, imageUrl: string, number: number) {
    event.dataTransfer?.setData('text/plain', imageUrl);
    event.dataTransfer?.setData('text/number', number.toString());
  }

  onDrop(event: DragEvent, box: string) {
    const imageUrl = event.dataTransfer?.getData('text/plain');
    const number = event.dataTransfer?.getData('text/number');
    if (imageUrl && number && box === 'right') {
      const parsedNumber = parseInt(number);
      this.rightBoxImages.push({ url: imageUrl, number: parsedNumber });
      this.removeImageFromLeftBox(imageUrl,parsedNumber);
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  removeImageFromLeftBox(imageUrl: string, number: number) {
    const index = this.leftBoxImages.findIndex(image => image.url === imageUrl && image.number === number);
    if (index !== -1) {
      this.leftBoxImages.splice(index, 1);
    }
  }
}
