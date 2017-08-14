import { Component, OnInit } from '@angular/core'
import { CampService } from '../services/camp-service.component'
import { Camp } from '../models/camp.model'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'list-camps',
  templateUrl: './list-camps.component.html'
})
export class ListCampsComponent implements OnInit {
  camps: Camp[]

  constructor(private campService: CampService, private toastr: ToastsManager) {}

  ngOnInit() {
    this.getAllCamps()
  }

  getAllCamps() {
    this.campService.getAllCamps().subscribe(camps => {
      camps = camps as Camp[]
      this.camps = camps
    })
  }

  deleteCamp(id: string) {
    this.campService.deleteCamp(id).subscribe(res => {
      if(res.success) {
        this.getAllCamps()
        this.toastr.success(res.message)
      } else {
        this.toastr.error(res.message)
      }
    })
  }
}