import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-customize',
  templateUrl: './products-customize.component.html'
})
export class ProductsCustomizeComponent {
  private selectedCategory!: string;
  private showModel!: boolean;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.getParamValue();
    this.getQueryParamValue();
  }

  private getQueryParamValue() {
    this.showModel =
      this.activatedRoute.snapshot.queryParamMap.get('showModel') === 'true';
    console.log(this.showModel);
  }

  private getParamValue() {
    this.selectedCategory =
      this.activatedRoute.snapshot.paramMap.get('categoryId') ?? '';
    console.log(this.selectedCategory);
  }
}
