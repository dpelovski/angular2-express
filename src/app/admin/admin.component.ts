import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../core/auth.service'

@Component({
  selector: 'admin-console',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  username: string
  selectedIndex = -1
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.username = this.authService.getUser()
  }

  show(index) {
    this.selectedIndex = index
  }

  logout() {
    this.authService.deauthenticateUser()
    this.authService.removeUser()
    this.router.navigateByUrl('/')
  }
}