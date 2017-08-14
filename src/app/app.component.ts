import { Component, ViewContainerRef } from '@angular/core'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private toastr: ToastsManager, private vcr: ViewContainerRef, private titleService: Title) {
    this.toastr.setRootViewContainerRef(vcr);
  }
}
