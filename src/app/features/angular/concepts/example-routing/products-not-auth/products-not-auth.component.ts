import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-not-auth',
  templateUrl: './products-not-auth.component.html'
})
export class ProductsNotAuthComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const userGreetings = data['userHello'];
      console.log(userGreetings);
    });
  }
}
