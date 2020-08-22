import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }
  
  GetImageDemo(){
    var storageRef = this.storage.ref('/');
    var imagesRef = storageRef.child('ImagesForTestCloudVision');
    
    var fileName = 'demo-img.jpg';
    var spaceRef = imagesRef.child(fileName);
    // File path is 'images/demo-img.jpg'
    var path = spaceRef.getDownloadURL();
    return path;
    
    // File name is 'demo-img.jpg'
    var name = spaceRef.name

    // Points to 'images'
    var imagesRef = spaceRef.parent;
  }
}

