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
    path: 'create-auction',
    loadChildren: () => import('./feature/create-auction/create-auction.module').then(mod => mod.CreateAuctionModule),
  },
  {
    path: 'join-auction',
    loadChildren: () => import('./feature/join-auction/join-auction.module').then(mod => mod.JoinAuctionModule),
  },
  {
    path: 'live-auction',
    loadChildren: () => import('./feature/live-auction/live-auction.module').then(mod => mod.LiveAuctionModule),
  },
  {
    path: 'my-account',
    loadChildren: () => import('./feature/my-account/my-account.module').then(mod => mod.MyAccountModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
