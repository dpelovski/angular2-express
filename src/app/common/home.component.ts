import { Component, OnInit, AfterViewInit } from '@angular/core'

import main from '../scripts/main'
import { WOW } from 'wowjs/dist/wow.min'

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  constructor() { }

  ngAfterViewInit() {
    let wow = new WOW().init
    
    main()
  }
}