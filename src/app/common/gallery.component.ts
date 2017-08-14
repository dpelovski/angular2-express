import { Component, AfterViewInit } from '@angular/core'

import main from '../scripts/main'
import { WOW } from 'wowjs/dist/wow.min'

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html'
})

export class GalleryComponent {

  ngAfterViewInit() {
    //let wow = new WOW().init
    main()
  }

}