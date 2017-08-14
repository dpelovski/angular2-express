import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { CampService } from '../services/camp-service.component'
import { Camp } from '../models/camp.model'
import { DataService } from '../core/data.service'

@Component({
  selector: 'camp-component',
  templateUrl: './camp.component.html'
})

export class CampComponent {

  camps: Camp[]
  bgCategoryWords = {"detski": "Детски лагер", "ednodnevni": "Еднодневен", "ekskurzionni": "Екскурзионен"}
  bgAges = {"6,12": "6-12г.", "9,14": "9-14г."}
  detskiCount: number
  ednCount: number
  eksCount: number

  constructor(private campService: CampService, private router: Router, private data: DataService) {} 

  ngOnInit() {
    this.campService.getAllCamps().subscribe(camps => {
      camps = camps as Camp[]
      this.camps = camps
      
      this.detskiCount = this.camps.filter(camp => {
        return camp.category === 'detski'
      }).length

      this.ednCount = this.camps.filter(camp => {
        return camp.category === 'ekskurzionni'
      }).length

      this.eksCount = this.camps.filter(camp => {
        return camp.category === 'ednodnevni'
      }).length
      
    })
  }

}