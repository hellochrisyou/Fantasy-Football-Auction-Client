import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

import { JoinLeagueComponent } from './join-league.component';


const routes: Routes = [
  {
    path: '',
    component: JoinLeagueComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinLeagueRoutingModule { }
