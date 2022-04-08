import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
