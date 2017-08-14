import { Component } from '@angular/core'

import main from '../scripts/main'
import { WOW } from 'wowjs/dist/wow.min'

@Component({
  selector: 'about-us',
  templateUrl: './aboutus.component.html'
})

export class AboutUsComponent {

  ngAfterViewInit() {
    new WOW().init
    
    main()
  
  }

}