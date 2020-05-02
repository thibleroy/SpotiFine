import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Route } from '@angular/router';
import { CustomRoutes } from '../lib/custom_routes'

export const routes: CustomRoutes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome', data_cy: "welcome_route", name: "Welcome", icon: "Home",
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  { path: 'playlists', data_cy: "playlists_route", name: "Playlists", icon: "musical-notes", 
    loadChildren: () => import('./pages/playlists/playlists.module').then(m => m.PlaylistsPageModule) },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'callback',
    loadChildren: () => import('./pages/callback/callback.module').then(m => m.CallbackPageModule)
  },
  {
    path: 'artists', data_cy: "artists_route", name: "My Top Artists", icon: "star",
    loadChildren: () => import('./pages/artists/artists.module').then( m => m.ArtistsPageModule)
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
