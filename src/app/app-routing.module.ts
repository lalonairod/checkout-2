import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'auth',
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : '**',
        redirectTo : 'login'
      }
    ]
  },
  {
    path : 'authLazy',
    loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path : '',
    loadChildren: () => import('./components/modules/home/home.module').then(m => m.HomeModule),
    canLoad : [AuthGuard],
    canActivate : [AuthGuard]
  },
  {
    path : '**',
    redirectTo : 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
