import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '@app/spinner/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get showBackBtn() {
    return window.location.href.includes('/products/')
  }
  constructor(public loaderService: SpinnerService, private router: ActivatedRoute) {
  }


}
