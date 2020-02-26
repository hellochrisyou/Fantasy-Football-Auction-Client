import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateLeagueRoutingModule } from './create-league-routing.module';
import { CreateLeagueComponent } from './create-league.component';



@NgModule({
  declarations: [CreateLeagueComponent],
  imports: [
    SharedModule,
    CreateLeagueRoutingModule
  ],
  exports: [CreateLeagueComponent]
})
export class CreateLeagueModule { }
