import { Component, OnInit } from '@angular/core'
import { DataService } from '../core/data.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { CampService } from '../services/camp-service.component'
import { Camp } from '../models/camp.model'

@Component({
  selector: 'camp-details',
  templateUrl: './camp-details.component.html'
})
export class CampDetailsComponent implements OnInit {

  bgCategoryWords = {"detski": "Детски лагер", "ednodnevni": "Еднодневен", "ekskurzionni": "Екскурзионен"}
  bgAges = {"6,12": "6-12г.", "9,14": "9-14г."}
  camp: Camp

  constructor(private campService: CampService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let name = params['name']
      this.campService.getSpecificCampByName(name).subscribe(res => {
          this.camp = res as Camp
        })
      })
    
    
  }
}