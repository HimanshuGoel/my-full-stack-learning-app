import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export enum ROUTER_TOKENS {
  ANGULAR = 'angular',
  TYPESCRIPT = 'typescript'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular',
    pathMatch: 'full'
  },
  {
    path: `${ROUTER_TOKENS.ANGULAR}`,
    loadChildren: () => import('./features/angular/angular.module').then((m) => m.AngularModule)
  },
  {
    path: `${ROUTER_TOKENS.TYPESCRIPT}`,
    loadChildren: () =>
      import('./features/typescript/typescript.module').then((m) => m.TypescriptModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
