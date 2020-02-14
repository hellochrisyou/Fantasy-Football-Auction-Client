import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import * as fromProfile from '.';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [...fromProfile.ProfileComponents],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [...fromProfile.ProfileComponents]
})
export class ProfileModule { }
