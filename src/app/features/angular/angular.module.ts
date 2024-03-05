import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from 'src/app/widget/widget.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AngularComponent } from './angular.component';
import { PopUpWindowComponent } from './concepts/example-content-projection/pop-up-window/pop-up-window.component';
import { SanitizationComponent } from './concepts/example-sanitization/sanitization.component';

export enum ANGULAR_ROUTER_TOKENS {
  EXAMPLES = 'examples',
  ROUTING = 'routing'
}

const ANGULAR_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AngularComponent
  }
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
  declarations: [AngularComponent, PopUpWindowComponent, SanitizationComponent]
})
export class AngularModule {}
