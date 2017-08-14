import { Component, NgZone, OnInit, AfterViewInit } from '@angular/core'

declare var $: any;
import main from '../scripts/main'
import { WOW } from 'wowjs/dist/wow.min'

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation.component.html',
})

export class NavigationComponent { 
  constructor(private zone: NgZone) {
    
  }

  generateScript(name: string, src: string) {
    document.getElementById(name).remove()
    var script = document.createElement("script")
    script.setAttribute('id', name)
    script.setAttribute('src', src)
    document.body.appendChild(script);
  }

  ngAfterViewInit() {
    new WOW().init
    main()
  }

  reloadPage() {
    this.zone.runOutsideAngular(() => {
      // location.reload()
      // this.generateScript('jquery', 'assets/js/jquery.js')
      // this.generateScript('bootstrap', 'assets/js/bootstrap.min.js')
      // this.generateScript('lightbox', 'assets/js/lightbox.min.js')
      // this.generateScript('wow', 'assets/js/wow.min.js')
      // this.generateScript('countTo', 'assets/js/jquery.countTo.js')
      // this.generateScript('main', 'assets/js/main.js')
    })
  }
}