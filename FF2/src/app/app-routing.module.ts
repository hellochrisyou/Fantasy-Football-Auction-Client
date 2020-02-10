import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'my-team',
    loadChildren: () => import('./feature/my-team/my-team.module').then(mod => mod.MyTeamModule),
  },
  {
    path: 'auction',
    loadChildren: () => import('./feature/auction/auction.module').then(mod => mod.AuctionModule),
  },
  {
    path: 'my-account',
    loadChildren: () => import('./feature/my-account/my-account.module').then(mod => mod.MyAccountModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
