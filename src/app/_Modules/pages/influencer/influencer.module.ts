import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencerRoutingModule } from './influencer-routing.module';
import { InfluencerComponent } from './influencer/influencer.component';


@NgModule({
  declarations: [
    InfluencerComponent
  ],
  imports: [
    CommonModule,
    InfluencerRoutingModule
  ]
})
export class InfluencerModule { }
