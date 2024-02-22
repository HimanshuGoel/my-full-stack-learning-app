import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './angular.component';
import { ROUTING_ROUTES } from './routing/routing.routes';
import { ProductsComponent } from './routing/products/products.component';
import { WidgetModule } from 'src/app/widget/widget.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopUpWindowComponent } from './content-projection/pop-up-window/pop-up-window.component';
import { ParentComponent } from './content-projection/parent/parent.component';
import { ConsumerComponent } from './two-way-data-binding/consumer.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { StateButtonComponent } from './ng-container/parent/state-button.component';
import { SanitizationComponent } from './sanitization/sanitization.component';
import {
  PaneDirective,
  ViewChildComponent
} from './view-child/view-child.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export enum ANGULAR_ROUTER_TOKENS {
  EXAMPLES = 'examples',
  ROUTING = 'routing'
}

const ANGULAR_ROUTES: Routes = [
  {
    path: '',
    redirectTo: ANGULAR_ROUTER_TOKENS.EXAMPLES,
    pathMatch: 'full'
  },
  {
    path: ANGULAR_ROUTER_TOKENS.EXAMPLES,
    component: ExamplesComponent
  },
  {
    path: ANGULAR_ROUTER_TOKENS.ROUTING,
    component: ProductsComponent,
    children: ROUTING_ROUTES
  },
  { path: 'state-button', component: StateButtonComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ANGULAR_ROUTES),
    WidgetModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChangePasswordFormComponent,
    ExamplesComponent,
    ProductsComponent,
    PopUpWindowComponent,
    ParentComponent,
    ConsumerComponent,
    TwoWayDataBindingComponent,
    StateButtonComponent,
    SanitizationComponent,
    PaneDirective,
    ViewChildComponent
  ]
})
export class AngularModule {}
