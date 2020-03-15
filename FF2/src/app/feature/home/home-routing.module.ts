import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SnakeDraftModule } from '../snake-draft/snake-draft.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'my-team',
    loadChildren: () => import('./../my-team/my-team.module').then(mod => mod.MyTeamModule),
  },
  {
    path: 'create-league',
    loadChildren: () => import('../create-league/create-league.module').then(mod => mod.CreateLeagueModule),
  },
  {
    path: 'join-league',
    loadChildren: () => import('../join-league/join-league.module').then(mod => mod.JoinAuctionModule),
  },
  {
    path: 'live-auction',
    loadChildren: () => import('./../live-auction/live-auction.module').then(mod => mod.LiveAuctionModule),
  },
  {
    path: 'snake-auction',
    loadChildren: () => import('./../snake-draft/snake-draft.module').then(mod => mod.SnakeDraftModule),
  },
  {
    path: 'my-account',
    loadChildren: () => import('./../my-account/my-account.module').then(mod => mod.MyAccountModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
