import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable()
export class AdminRoute implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if(!JSON.parse(this.authService.getUser())){
      this.router.navigateByUrl('users/login')
      return false
    }
    if(JSON.parse(this.authService.getUser())['isAdmin']){
      return true
    } else {
      this.router.navigateByUrl('users/login')
      return false
    }    
  }
}