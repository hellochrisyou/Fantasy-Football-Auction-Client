import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamComponent } from './my-team.component';
import { MyTeamRoutingModule } from './my-team-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MyTeamComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyTeamRoutingModule
  ]
})
export class MyTeamModule { }
