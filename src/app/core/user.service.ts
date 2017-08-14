import { Injectable } from '@angular/core'
import { HttpService } from '../core/http.service'

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) {}

  login(user) {
    return this.httpService.post('auth/login', user, false)
  }
}