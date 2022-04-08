import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnakeDraftComponent } from './snake-draft.component';
import { LastSeasonResolver } from 'src/app/core/resolve/last-season.resolve';
import { AuthGuard } from 'src/app/core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: SnakeDraftComponent,
    resolve: { auctionValues: LastSeasonResolver }, canActivate: [AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnakeDraftRoutingModule { }
