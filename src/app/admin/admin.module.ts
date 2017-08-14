import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { CKEditorModule } from 'ng2-ckeditor'

import { AdminComponent } from './admin.component'
import { CreateCampComponent } from './create-camp.component'
import { ListCampsComponent } from './list-camps.component'
import { EditCampComponent } from './edit-camp.component'
import { UploadComponent } from './upload.component'

@NgModule({
  declarations: [AdminComponent, CreateCampComponent, UploadComponent, ListCampsComponent, EditCampComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    CKEditorModule
  ],
  providers: []
})

export class AdminModule {}