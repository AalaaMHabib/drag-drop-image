import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drag-drop-images';
  leftBoxImages: { url: string; number: number; checked: boolean }[] = [
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 1,
      checked: false,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 2,
      checked: false,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 3,
      checked: false,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 4,
      checked: false,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 5,
      checked: false,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 6,
      checked: false,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 7,
      checked: false,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 8,
      checked: false,
    },
  ];

  rightBoxImages: { url: string; number: number }[] = [
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 9,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 10,
    },
    {
      url: 'https://privacyterms.io/wp-content/uploads/terms-of-service-preview.png',
      number: 11,
    },
  ];

  onDragStart(
    event: DragEvent,
    image: { url: string; number: number; checked?: boolean }
  ) {
    image.checked = true;
    event.dataTransfer?.setData('text/plain', image.url);
    event.dataTransfer?.setData('text/number', image.number.toString());
  }

  onDrop(event: DragEvent, box: string) {
    const imageUrl = event.dataTransfer?.getData('text/plain');
    const number = event.dataTransfer?.getData('text/number');
    if (imageUrl && number && box === 'right') {
      const parsedNumber = parseInt(number);
      const image = this.leftBoxImages.find(
        (img) => img.url === imageUrl && img.number === parsedNumber
      );
      if (image) {
        this.rightBoxImages.push({ url: image.url, number: image.number });
        image.checked = false;
        this.removeImageFromLeftBox(image);
      }
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  removeImageFromLeftBox(image: {
    url: string;
    number: number;
    checked: boolean;
  }) {
    const index = this.leftBoxImages.findIndex(
      (img) => img.url === image.url && img.number === image.number
    );
    if (index !== -1) {
      this.leftBoxImages.splice(index, 1);
    }
  }
}
