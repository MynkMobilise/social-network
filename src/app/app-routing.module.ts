import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponentComponent } from './layouts/blank-component/blank-component.component';
import { FullComponentComponent } from './layouts/full-component/full-component.component';

const routes: Routes = [
  {
    path:'',
    component: BlankComponentComponent,
    children: [
      { path : '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to auth module by default
      // Lazy load the auth module
      // This will load the auth module when the path is 'auth'
      // The auth module will handle its own routing
      { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  {
    path: '',
    component: FullComponentComponent,
    children: [
      { path: 'feed', loadChildren: () => import('./features/feed/feed.module').then(m => m.FeedModule) },
    ]
  },
  { path: '**' , redirectTo: 'auth' } // Redirect to auth module for any unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
