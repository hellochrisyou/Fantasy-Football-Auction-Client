import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    SharedModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
