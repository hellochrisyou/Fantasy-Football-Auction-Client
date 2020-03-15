import { SnakeDraftComponent } from './snake-draft.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeDraftRoutingModule } from './snake-draft-routing.module';
import { SnakeLobbyComponent } from './snake-lobby/snake-lobby.component';


@NgModule({
  declarations: [SnakeDraftComponent, SnakeLobbyComponent],
  imports: [
    CommonModule,
    SnakeDraftRoutingModule
  ],
  exports: [SnakeDraftComponent, SnakeLobbyComponent]
})
export class SnakeDraftModule { }
