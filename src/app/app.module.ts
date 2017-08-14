import { BrowserModule, Title } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { HttpModule } from '@angular/http'

import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { NavigationComponent } from './partials/navigation.component'
import { FooterComponent } from './partials/footer.component'

import { CampService } from './services/camp-service.component'
import { UploadService } from './services/upload.service'

import { CKEditorModule } from 'ng2-ckeditor'
import { ToastModule } from 'ng2-toastr/ng2-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AdminModule } from './admin/admin.module'
import { GeneralModule } from './common/general.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CoreModule,
    GeneralModule,
    FormsModule,
    AdminModule,
    CKEditorModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [CampService, UploadService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
