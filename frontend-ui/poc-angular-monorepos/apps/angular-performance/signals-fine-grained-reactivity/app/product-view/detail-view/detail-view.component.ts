import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ProductService } from '../../services';
import { AddToCartButtonComponent } from '../../shared-ui/add-to-cart-button/add-to-cart-button.component';

@Component({
  standalone: true,
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  imports: [
    CurrencyPipe,
    AddToCartButtonComponent,
    NgOptimizedImage,
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DetailViewComponent {
  @Input() set productId(val: string) {
    this.productService.selectedProductId.set(val);
  }

  private readonly productService = inject(ProductService);
  protected selectedProduct = this.productService.selectedProduct;

  templateRendered() {
    console.log('Change Detection in DetailViewComponent');
  }
}

