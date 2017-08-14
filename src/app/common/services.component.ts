import { Component, AfterViewInit } from '@angular/core'

import main from '../scripts/main'
import { WOW } from 'wowjs/dist/wow.min'

@Component({
  selector: 'services',
  templateUrl: './services.component.html'
})

export class ServicesComponent { 
  ngAfterViewInit() {
    new WOW().init
    main()
  }
}