import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@app/spinner/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get isCurrentRouteProduct() {
    return this.router.url === '/products';
  }
  constructor(public loaderService: SpinnerService, private router: Router) {
    // check current route is products
    if (this.router.url === '/products') {
    }
  }


}
