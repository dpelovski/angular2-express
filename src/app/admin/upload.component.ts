import { Component } from '@angular/core'
import { UploadService } from '../services/upload.service'
import { Http } from '@angular/http';

@Component({
  selector: 'upload',
  template: 
  `
    <input type="file" (change)="fileChangeEvent($event)" name='file' placeholder="Upload file..." />
    <button type="button" (click)="upload()">Upload</button>
  `
})

export class UploadComponent {
  file: any

  constructor(private uploadService: UploadService) {}

  fileChangeEvent(fileInput: any) {
    this.file = fileInput.target.files[0]
  }

  upload() {
    let formData = new FormData()
    formData.append('file', this.file, this.file.name)
    this.uploadService.uploadToServer(formData)
  }
}