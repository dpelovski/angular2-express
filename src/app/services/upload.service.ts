import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UploadService {

  constructor(private http: Http) {}

  uploadToServer(file: any) {
    return this.http.post(`http://localhost:3005/upload/images`, file)
    .toPromise()
    .then(res => console.log(res))
    .catch(err => {
      console.log(err)
    })
  }

}