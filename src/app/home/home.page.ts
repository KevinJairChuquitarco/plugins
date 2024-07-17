import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public photo = "";
  constructor(private camera: Camera) { }


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // La imagen está en base64
      this.photo = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Manejo de error
      console.log("error")
    });
  }
}
