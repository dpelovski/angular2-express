import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './common/home.component'
import { AboutUsComponent } from './common/aboutus.component'
import { ContactComponent } from './common/contact.component'
import { ServicesComponent } from './common/services.component'
import { GalleryComponent } from './common/gallery.component'
import { CampComponent } from './common/camp.component'
import { CampDetailsComponent } from './common/camp-details.component'
import { LoginComponent } from './core/login.component'
import { NotFoundComponent } from './common/not-found.component'

import { AdminComponent } from './admin/admin.component'
import { CreateCampComponent } from './admin/create-camp.component'
import { EditCampComponent } from './admin/edit-camp.component'
import { UploadComponent } from './admin/upload.component'

import { PrivateRoute } from './core/private.route'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'camps', component: CampComponent },
  { path: 'camps/:name', component: CampDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [PrivateRoute] },
  { path: 'admin/camp/create', component: CreateCampComponent, canActivate: [PrivateRoute] },
  { path: 'admin/upload', component: UploadComponent, canActivate: [PrivateRoute] },
  { path: 'admin/camp/edit/:id', component: EditCampComponent, canActivate: [PrivateRoute] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}