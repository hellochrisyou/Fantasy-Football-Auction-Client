import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'draft',
    loadChildren: () => import('./draft/draft.module').then(mod => mod.DraftModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
