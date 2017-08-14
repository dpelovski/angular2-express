import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { AboutUsComponent } from './aboutus.component'
import { ContactComponent } from './contact.component'
import { GalleryComponent } from './gallery.component'
import { CampComponent } from './camp.component'
import { ServicesComponent } from './services.component'
import { CampDetailsComponent } from './camp-details.component'
import { NotFoundComponent } from './not-found.component'

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    GalleryComponent,
    CampComponent,
    ServicesComponent,
    CampDetailsComponent,
    NotFoundComponent
  ],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class GeneralModule { }