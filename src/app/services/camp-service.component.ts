import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Camp } from '../models/camp.model'
import { HttpService } from '../core/http.service'

const url = 'http://localhost:3005'

@Injectable()
export class CampService {

  constructor(private httpService: HttpService) {}

  getAllCamps() {
    return this.httpService.get('camps/all', false)
  }

  createCamp(camp) {
    return this.httpService.post('camps/create', camp, true)
  }

  deleteCamp(id) {
    return this.httpService.post(`camps/delete/${id}`, null, true)
  }

  getSpecificCamp(id) {
    return this.httpService.get(`camps/edit/${id}`, true)
  }

  editCamp(camp) {
    return this.httpService.post(`camps/edit/${camp._id}`, camp, true)
  }

  getSpecificCampByName(name) {
    return this.httpService.get(`camps/fetch/${name}`, true)
  }

}