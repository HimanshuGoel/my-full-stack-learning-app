import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptComponent } from './typescript.component';
import { RouterModule, Routes } from '@angular/router';

const TYPESCRIPT_ROUTES: Routes = [
  {
    path: '',
    component: TypescriptComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TYPESCRIPT_ROUTES)],
  declarations: [TypescriptComponent]
})
export class TypescriptModule {}
