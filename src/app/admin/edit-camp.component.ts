import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { CampService } from '../services/camp-service.component'
import { Camp } from '../models/camp.model'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'edit-camp',
  templateUrl: './edit-camp.component.html'
})
export class EditCampComponent implements OnInit {
  types = ['detski', 'ednodnevni', 'ekskurzionni']
  ages = ['6,9', '9,14']
  camp :Camp

  constructor(private campService: CampService, private activatedRoute: ActivatedRoute, private toastr: ToastsManager) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id']
        this.campService.getSpecificCamp(id).subscribe(res => {
          this.camp = res as Camp
        })
      })
  }

  editCamp() {
    this.campService.editCamp(this.camp).subscribe(res => {
      if (res.success){
        this.toastr.success(res.message)
      } else {
        let firstError = Object.keys(res.errors)[0]
        this.toastr.error(res.errors[firstError])
      }
    })
  }
}