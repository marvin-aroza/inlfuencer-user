import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencerRoutingModule } from './influencer-routing.module';
import { InfluencerComponent } from './influencer/influencer.component';
import { InfluencerViewComponent } from './influencer-view/influencer-view.component';


@NgModule({
  declarations: [
    InfluencerComponent,
    InfluencerViewComponent
  ],
  imports: [
    CommonModule,
    InfluencerRoutingModule
  ]
})
export class InfluencerModule { }
