import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drag-drop-images';
  leftBoxImages: string[] = [
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
  ];

  rightBoxImages: string[] = [
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
    'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
  ];

  onDragStart(event: DragEvent, imageUrl: string) {
    event.dataTransfer?.setData('text/plain', imageUrl);
  }

  onDrop(event: DragEvent, box: string) {
    const imageUrl = event.dataTransfer?.getData('text/plain');
    if (imageUrl && box === 'right') {
      this.rightBoxImages.push(imageUrl);
      this.removeImageFromLeftBox(imageUrl);
    }
  }
  removeImageFromLeftBox(imageUrl: string) {
    const index = this.leftBoxImages.indexOf(imageUrl);
    if (index !== -1) {
      this.leftBoxImages.splice(index, 1);
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }
}
