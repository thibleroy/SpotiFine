import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Route } from '@angular/router';
import { CustomRoutes } from '../lib/custom_routes'

export const routes: CustomRoutes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', name: "Home", icon: "Home", loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'welcome', name: "Welcome", icon: "star",
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'callback',
    loadChildren: () => import('./pages/callback/callback.module').then(m => m.CallbackPageModule)
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
