import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { HomeComponent } from './shared/pages/home/home.component';

export enum ROUTER_TOKENS {
  HOME = 'home',
  ANGULAR = 'angular',
  TYPESCRIPT = 'typescript'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: ROUTER_TOKENS.HOME,
    component: HomeComponent
  },
  {
    path: `${ROUTER_TOKENS.ANGULAR}`,
    loadChildren: () => import('./features/angular/angular.module').then((m) => m.AngularModule)
  },
  {
    path: `${ROUTER_TOKENS.TYPESCRIPT}`,
    loadChildren: () =>
      import('./features/typescript/typescript.module').then((m) => m.TypescriptModule)
  },
  {
    path: '**',
    pathMatch: 'prefix',
    component: NotFoundComponent
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
