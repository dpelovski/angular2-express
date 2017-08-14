import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { HttpService } from './http.service'
import { AuthService } from './auth.service'
import { PrivateRoute } from './private.route'
import { AdminRoute } from './admin.route'

import { UserService } from './user.service'
import { SeoService } from './seo.service'
import { DataService } from './data.service'

import { LoginComponent } from './login.component'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule,
    FormsModule
  ],
  providers: [HttpService, AuthService, PrivateRoute, AdminRoute, UserService, SeoService, DataService]
})

export class CoreModule {}