import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Camp } from '../models/camp.model'
import { CampService } from '../services/camp-service.component'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'create-camp',
  templateUrl: './create-camp.component.html'
})

export class CreateCampComponent {

  types = ['detski', 'ednodnevni', 'ekskurzionni']
  ages = ['6,12', '9,14']
  camp = new Camp('','', '', '', '', '', '', '')

  constructor(private campService: CampService, private toastr: ToastsManager, private router: Router) {}

  createCamp() {
    this.campService.createCamp(this.camp).subscribe(res => {
      if(res.success) {
        this.toastr.success(res.message)
        this.router.navigateByUrl('/camps')
      } else {
        let firstError = Object.keys(res.errors)[0]
        this.toastr.error(res.errors[firstError])
      }
    })
  }
}