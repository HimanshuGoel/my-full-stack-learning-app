import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples/examples.component';
import { RouterModule, Routes } from '@angular/router';

const TYPESCRIPT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'examples',
    pathMatch: 'full'
  },
  {
    path: 'examples',
    component: ExamplesComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TYPESCRIPT_ROUTES)],
  declarations: [ExamplesComponent]
})
export class TypescriptModule {}
